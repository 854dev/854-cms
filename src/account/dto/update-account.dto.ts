import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsInt()
  id: number;
}
