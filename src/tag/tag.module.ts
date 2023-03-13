import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityMap from 'src/database/entity-map';

@Module({
  imports: [TypeOrmModule.forFeature([...entityMap.tag])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
