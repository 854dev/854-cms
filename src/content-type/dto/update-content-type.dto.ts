import { PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreateContentTypeDto } from './create-content-type.dto';

export class UpdateContentTypeDto extends PartialType(CreateContentTypeDto) {
  @IsInt()
  contentTypeId: number;
}
