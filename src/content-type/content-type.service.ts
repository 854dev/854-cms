import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentBodySchema } from 'src/content-type/entities/content-body-schema.entity';
import { EntityCondition } from 'src/util/types/entity-condition';
import { IPaginationOptions } from 'src/util/types/pagination-option';
import { Repository } from 'typeorm';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { UpdateContentTypeDto } from './dto/update-content-type.dto';
import { ContentType } from './entities/content-type.entity';

@Injectable()
export class ContentTypeService {
  constructor(
    @InjectRepository(ContentType)
    private contentTypeRepository: Repository<ContentType>,
    @InjectRepository(ContentBodySchema)
    private ContentBodySchemaRepository: Repository<ContentBodySchema>
  ) {
    return;
  }

  create(createContentTypeDto: CreateContentTypeDto) {
    // 타입 추가
    this.contentTypeRepository.save(
      this.contentTypeRepository.create(createContentTypeDto)
    );

    return `content type added : ${createContentTypeDto.contentTypeName}`;
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.contentTypeRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  async findOne(fields: EntityCondition<ContentType>) {
    const contentType = await this.contentTypeRepository.findOne({
      where: fields,
    });
    const bodySchema = await this.ContentBodySchemaRepository.find({
      where: {
        contentTypeId: fields.contentTypeId,
      },
    });

    return { ...contentType, bodySchema };
  }

  update(updateProfileDto: UpdateContentTypeDto) {
    return this.contentTypeRepository.save(
      this.contentTypeRepository.create({
        ...updateProfileDto,
      })
    );
  }

  async softDelete(id: number) {
    const bodydelete = await this.ContentBodySchemaRepository.delete({
      contentTypeId: id,
    });
    const typedelete = this.contentTypeRepository.delete(id);
    return Promise.all([bodydelete, typedelete]);
  }
}
