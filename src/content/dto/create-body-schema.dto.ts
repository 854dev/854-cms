import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateBodySchemaDto {
  @IsInt()
  @ApiProperty()
  contentTypeId: number;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty()
  fieldType: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty()
  fieldName: string;
}
