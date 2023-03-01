import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ContentBodySchema } from 'src/content-type/entities/content-body-schema.entity';
import { CreateBodySchemaDto } from 'src/content-type/dto/create-body-schema.dto';
import { EntityCondition } from 'src/util/types/entity-condition';

@Injectable()
export class ContentBodySchemaService {
  constructor(
    @InjectRepository(ContentBodySchema)
    private contentBodySchemaRepository: Repository<ContentBodySchema>
  ) {
    return;
  }

  create(createBodySchemaDto: CreateBodySchemaDto) {
    this.contentBodySchemaRepository.save(
      this.contentBodySchemaRepository.create(createBodySchemaDto)
    );
    return `field added : ${createBodySchemaDto.fieldName}`;
  }

  findMany(fields: EntityCondition<ContentBodySchema>) {
    const bodyField = this.contentBodySchemaRepository.find({
      where: {
        contentTypeId: fields.contentTypeId,
      },
    });
    return bodyField;
  }

  async delete(where: EntityCondition<ContentBodySchema>): Promise<void> {
    await this.contentBodySchemaRepository.delete(where);
  }
}
