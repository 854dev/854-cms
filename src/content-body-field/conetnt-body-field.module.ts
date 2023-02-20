import { Module } from '@nestjs/common';
import { ContentBodyFieldService } from './conetnt-body-field.service';
import { ContentBodyFieldController } from './conetnt-body-field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentBodyField } from './entities/content-body-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentBodyField])],
  controllers: [ContentBodyFieldController],
  providers: [ContentBodyFieldService],
})
export class ContentBodyFieldModule {}
