import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

import { ContentCore } from './entities/content-core.entity';
import { ContentBody } from './entities/content-body.entity';
import { ContentMeta } from './entities/content-meta.entity';
import { ContentBodyField } from '../content-type/entities/content-body-field.entity';

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
  create(createContentDto: CreateContentDto) {
    return 'This action adds a new content';
  }

  findAll() {
    return `This action returns all content`;
  }

  findOne(id: number) {
    return `This action returns a #${id} content`;
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }

  remove(id: number) {
    return `This action removes a #${id} content`;
  }
}
