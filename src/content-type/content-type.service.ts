import { Injectable } from '@nestjs/common';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { UpdateContentTypeDto } from './dto/update-content-type.dto';

@Injectable()
export class ContentTypeService {
  create(createContentTypeDto: CreateContentTypeDto) {
    return 'This action adds a new contentType';
  }

  findAll() {
    return `This action returns all contentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contentType`;
  }

  update(id: number, updateContentTypeDto: UpdateContentTypeDto) {
    return `This action updates a #${id} contentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} contentType`;
  }
}
