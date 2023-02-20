import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreateContentDto } from './create-content.dto';

export class UpdateContentDto extends PartialType(CreateContentDto) {
  @IsInt()
  contentId: number;
}
