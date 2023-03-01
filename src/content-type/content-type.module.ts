import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentType } from './entities/content-type.entity';
import { ContentBodySchema } from 'src/content-type/entities/content-body-schema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentType, ContentBodySchema])],
  controllers: [ContentTypeController],
  providers: [ContentTypeService],
})
export class ContentTypeModule {}
