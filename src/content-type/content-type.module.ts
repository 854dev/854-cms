import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentType } from './entities/content-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentType])],
  controllers: [ContentTypeController],
  providers: [ContentTypeService],
})
export class ContentTypeModule {}
