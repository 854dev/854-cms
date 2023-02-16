import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityMap from 'src/database/entity-map';

@Module({
  imports: [TypeOrmModule.forFeature([...entityMap.content])],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
