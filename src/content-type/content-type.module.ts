import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentBodySchemaController } from './content-body-schema.controller';
import { ContentBodySchemaService } from './content-body-schema.service';
import entityMap from 'src/database/entity-map';

@Module({
  imports: [TypeOrmModule.forFeature([...entityMap.contentType])],
  controllers: [ContentTypeController, ContentBodySchemaController],
  providers: [ContentTypeService, ContentBodySchemaService],
})
export class ContentTypeModule {}
