import { PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreateBodyFieldDto } from './create-body-field.dto';

export class UpdateBodyFieldDto extends PartialType(CreateBodyFieldDto) {
  @IsInt()
  id: number;
}
