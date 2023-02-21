import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentType } from './entities/content-type.entity';
import { ContentBodyField } from 'src/content-body-field/entities/content-body-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentType, ContentBodyField])],
  controllers: [ContentTypeController],
  providers: [ContentTypeService],
})
export class ContentTypeModule {}
