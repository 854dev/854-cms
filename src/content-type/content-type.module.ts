import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentType } from './entities/content-type.entity';
import { ContentBodySchema } from 'src/content-type/entities/content-body-schema.entity';
import { ContentBodySchemaController } from './content-body-schema.controller';
import { ContentBodySchemaService } from './content-body-schema.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContentType, ContentBodySchema])],
  controllers: [ContentTypeController, ContentBodySchemaController],
  providers: [ContentTypeService, ContentBodySchemaService],
})
export class ContentTypeModule {}
