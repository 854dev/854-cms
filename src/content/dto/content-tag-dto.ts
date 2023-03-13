import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class ContentTagDto {
  @IsInt()
  @ApiProperty()
  tagId: number;

  @IsString()
  @ApiProperty()
  name: string;
}
