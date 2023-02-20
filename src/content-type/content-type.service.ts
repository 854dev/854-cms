import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/util/types/entity-condition';
import { IPaginationOptions } from 'src/util/types/pagination-option';
import { Repository } from 'typeorm';
import { CreateBodyFieldDto } from '../content-body-field/dto/create-body-field.dto';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { UpdateContentTypeDto } from './dto/update-content-type.dto';
import { ContentBodyField } from '../content-body-field/entities/content-body-field.entity';
import { ContentType } from './entities/content-type.entity';

@Injectable()
export class ContentTypeService {
  constructor(
    @InjectRepository(ContentType)
    private contentTypeRepository: Repository<ContentType>
  ) {
    return;
  }

  create(createContentTypeDto: CreateContentTypeDto) {
    // 타입 추가
    this.contentTypeRepository.save(
      this.contentTypeRepository.create(createContentTypeDto)
    );

    return `content type added : ${createContentTypeDto.name}`;
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.contentTypeRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(fields: EntityCondition<ContentType>) {
    return this.contentTypeRepository.findOne({
      where: fields,
    });
  }

  update(id: number, updateProfileDto: UpdateContentTypeDto) {
    return this.contentTypeRepository.save(
      this.contentTypeRepository.create({
        id,
        ...updateProfileDto,
      })
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.contentTypeRepository.softDelete(id);
  }
}
