import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ContentBodySchema } from 'src/content-type/entities/content-body-schema.entity';
import { CreateBodySchemaDto } from 'src/content-type/dto/create-body-schema.dto';

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

  findMany(contentTypeId?: number, fieldName?: string) {
    return this.contentBodySchemaRepository.find({
      where: {
        contentTypeId,
        fieldName,
      },
    });
  }

  async delete(contentTypeId: number, fieldName?: string): Promise<void> {
    await this.contentBodySchemaRepository.delete({
      contentTypeId,
      fieldName,
    });
  }
}
