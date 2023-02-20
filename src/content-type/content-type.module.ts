import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentBodyField } from './entities/content-body-field.entity';
import { ContentType } from './entities/content-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentBodyField, ContentType])],
  controllers: [ContentTypeController],
  providers: [ContentTypeService],
})
export class ContentTypeModule {}
