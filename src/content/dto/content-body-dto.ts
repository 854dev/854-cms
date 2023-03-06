import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class ContentBodyDto {
  @IsInt()
  @ApiProperty()
  schemaId: number;

  @IsString()
  @ApiProperty()
  schemaValue: string;
}
