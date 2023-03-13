import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>
  ) {
    return;
  }

  create(createTagDto: CreateTagDto) {
    this.tagRepository.save(this.tagRepository.create(createTagDto));
    return `tag added : ${createTagDto.name}`;
  }

  findAll() {
    return this.tagRepository.find();
  }

  update(tagId: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.save(
      this.tagRepository.create({
        ...updateTagDto,
        tagId,
      })
    );
  }

  remove(tagId: number) {
    return this.tagRepository.delete(tagId);
  }
}
