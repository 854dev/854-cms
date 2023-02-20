import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/util/types/entity-condition';
import { IPaginationOptions } from 'src/util/types/pagination-option';
import { Repository } from 'typeorm';
import { CreateBodyFieldDto } from '../content-body-field/dto/create-body-field.dto';
import { UpdateBodyFieldDto } from '../content-body-field/dto/update-body-field.dto';
import { ContentBodyField } from '../content-body-field/entities/content-body-field.entity';

@Injectable()
export class ContentBodyFieldService {
  constructor(
    @InjectRepository(ContentBodyField)
    private contentBodyFieldRepository: Repository<ContentBodyField>
  ) {
    return;
  }

  create(createBodyFieldDto: CreateBodyFieldDto) {
    // 타입 추가
    this.contentBodyFieldRepository.save(
      this.contentBodyFieldRepository.create(createBodyFieldDto)
    );

    return `content type added : ${createBodyFieldDto.fieldName}`;
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.contentBodyFieldRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(fields: EntityCondition<ContentBodyField>) {
    return this.contentBodyFieldRepository.findOne({
      where: fields,
    });
  }

  update(id: number, updateBodyFieldDto: UpdateBodyFieldDto) {
    return this.contentBodyFieldRepository.save(
      this.contentBodyFieldRepository.create({
        id,
        ...updateBodyFieldDto,
      })
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.contentBodyFieldRepository.softDelete(id);
  }
}
