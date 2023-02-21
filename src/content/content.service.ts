import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

import { ContentCore } from './entities/content-core.entity';
import { ContentBody } from './entities/content-body.entity';
import { ContentMeta } from './entities/content-meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions } from 'src/util/types/pagination-option';
import { EntityCondition } from 'src/util/types/entity-condition';

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
    @InjectRepository(ContentCore)
    private coreRepository: Repository<ContentCore>,
    @InjectRepository(ContentBody)
    private bodyRepository: Repository<ContentBody>,
    @InjectRepository(ContentMeta)
    private metaRepository: Repository<ContentMeta>
  ) {
    return;
  }

  async create(createContentDto: CreateContentDto) {
    // core
    const { contentTypeId, title, status, creator, body } = createContentDto;

    const core = this.coreRepository.create({ contentTypeId });

    // core 저장후 id 받는다
    const coreSave = await this.coreRepository.save(core);

    const { id: contentId } = coreSave;
    const meta = this.metaRepository.create({
      contentId,
      title,
      creator,
      status,
    });

    const bodyFields = this.bodyRepository.create(
      body.map((elem) => {
        return {
          contentId,
          ...elem,
        };
      })
    );
    const metaSave = this.metaRepository.save(meta);
    const bodySave = this.bodyRepository.save(bodyFields);

    await Promise.all([metaSave, bodySave]);
    return `content created`;
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
    const bodyFields = await this.bodyRepository.findOne({
      where: { contentId },
    });
    return bodyFields;
  }

  async update(updateContentDto: UpdateContentDto) {
    /** core : 수정불가 */
    const { contentId, body } = updateContentDto;
    /** meta 수정 */
    this.metaRepository.save(
      this.metaRepository.create({
        contentId,
        ...updateContentDto,
      })
    );

    /** body 수정 */
    this.bodyRepository.save(
      this.bodyRepository.create(
        body.map((elem) => {
          return {
            contentId,
            ...elem,
          };
        })
      )
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.metaRepository.softDelete(id);
  }
}
