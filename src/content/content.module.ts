import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityMap from 'src/database/entity-map';
import { ContentTypeController } from './content-type.controller';
import { ContentBodySchemaController } from './content-body-schema.controller';
import { ContentTypeService } from './content-type.service';
import { ContentBodySchemaService } from './content-body-schema.service';

@Module({
  imports: [TypeOrmModule.forFeature([...entityMap.content])],
  controllers: [
    ContentController,
    ContentTypeController,
    ContentBodySchemaController,
  ],
  providers: [ContentService, ContentTypeService, ContentBodySchemaService],
})
export class ContentModule {}
