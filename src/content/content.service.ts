import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

import { ContentBody } from './entities/content-body.entity';
import { ContentMeta } from './entities/content-meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityCondition } from 'src/util/types/entity-condition';
import { ContentBodySchema } from './entities/content-body-schema.entity';

/**
 *  콘텐츠 등록순서
 *  1. type 추가
 *  2. type field 추가
 *  3. content core 추가
 *  4. content meta 추가
 *  5. content body 추가
 */

interface IfindPaginationOption {
  contentTypeId?: number;
  page: number;
  limit: number;
}

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
    const {
      contentTypeId,
      contentTypeName,
      title,
      status,
      creator,
      tags,
      body,
    } = createContentDto;

    const meta = this.metaRepository.create({
      contentTypeId,
      contentTypeName,
      title,
      creator,
      status,
      tags,
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

  findManyWithPagination(paginationOptions: IfindPaginationOption) {
    return this.metaRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      where: {
        contentTypeId: paginationOptions.contentTypeId,
      },
      order: {
        createdAt: 'desc',
      },
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

    const bodySchema = await this.schemaRepository.find({
      where: { contentTypeId: meta.contentTypeId },
    });

    const body = await this.bodyRepository.find({
      where: { contentId },
    });

    const result3 = bodySchema.map((elem) => {
      const contentBody = body.find(
        (eachbody) => eachbody.schemaId === elem.schemaId
      );
      const schemaValue = contentBody ? contentBody.schemaValue : '';
      const schemaName = elem.schemaName;

      return {
        ...elem,
        schemaValue,
        schemaName,
      };
    });

    return { ...meta, body: result3 };
  }

  async update(updateContentDto: UpdateContentDto) {
    /** core : 수정불가 */
    const { contentId, body } = updateContentDto;

    /** meta 수정 */
    const { title, creator, status, tags } = updateContentDto;
    this.metaRepository.update({ contentId }, { title, creator, status });

    /** meta.tags 수정 */
    const currentMeta = await this.metaRepository.findOne({
      where: { contentId },
    });
    this.metaRepository
      .createQueryBuilder()
      .relation(ContentMeta, 'tags')
      .of(currentMeta)
      .addAndRemove(tags, currentMeta.tags);

    /** body 수정 */
    const updateBodies = body.map((elem) => {
      return { ...elem, contentId };
    });
    const updateBodies_Q = this.bodyRepository.upsert(updateBodies, [
      'contentId',
      'schemaId',
    ]);
    await updateBodies_Q;
    return `updated : ${title}`;
  }

  async softDelete(id: number): Promise<void> {
    await this.metaRepository.softDelete(id);
  }
}
