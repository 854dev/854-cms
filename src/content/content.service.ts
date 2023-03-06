import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

import { ContentBody } from './entities/content-body.entity';
import { ContentMeta } from './entities/content-meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions } from 'src/util/types/pagination-option';
import { EntityCondition } from 'src/util/types/entity-condition';
import { ContentBodySchema } from './entities/content-body-field.entity';

/**
 *  콘텐츠 등록순서
 *  1. type 추가
 *  2. type field 추가
 *  3. content core 추가
 *  4. content meta 추가
 *  5. content body 추가
 */

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(ContentBody)
    private bodyRepository: Repository<ContentBody>,
    @InjectRepository(ContentMeta)
    private metaRepository: Repository<ContentMeta>,
    @InjectRepository(ContentBodySchema)
    private schemaRepository: Repository<ContentBodySchema>
  ) {
    return;
  }

  async create(createContentDto: CreateContentDto) {
    // core
    const { contentTypeId, contentTypeName, title, status, creator, body } =
      createContentDto;

    const meta = this.metaRepository.create({
      contentTypeId,
      contentTypeName,
      title,
      creator,
      status,
    });

    const metaSave = await this.metaRepository.save(meta);

    const bodyFields = this.bodyRepository.create(
      body.map((elem) => {
        return {
          ...elem,
          contentId: metaSave.contentId,
        };
      })
    );

    const bodySave = await this.bodyRepository.save(bodyFields);
    return `content created : ${title}`;
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.metaRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(fields: EntityCondition<ContentMeta>) {
    return this.metaRepository.findOne({
      where: fields,
    });
  }

  async findOneWithBody(contentId: number) {
    const meta = await this.metaRepository.findOne({
      where: { contentId },
    });

    /** contentBodySchema 에서 기본값을 넣어 만든다 */
    const bodySchema = await this.schemaRepository.find({
      where: {
        contentTypeId: meta.contentTypeId,
      },
    });

    const bodyFields = await this.bodyRepository.find({
      where: { contentId },
    });

    return { ...meta, body: bodyFields };
  }

  async update(updateContentDto: UpdateContentDto) {
    /** core : 수정불가 */
    const { contentId, body } = updateContentDto;

    /** meta 수정 */
    const { title, creator, status } = updateContentDto;
    this.metaRepository.update({ contentId }, { title, creator, status });

    /** body 수정 */
    const updateBodies = body.map((elem) =>
      this.bodyRepository.update({ contentId: Number(contentId) }, elem)
    );
    await Promise.all(updateBodies);
  }

  async softDelete(id: number): Promise<void> {
    await this.metaRepository.softDelete(id);
  }
}
