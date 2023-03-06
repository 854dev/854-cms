import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

class ContentBodyDto {
  @IsInt()
  bodyFieldId: number;

  @IsString()
  bodyField: string;

  @IsString()
  bodyFieldValue: string;
}

export class CreateContentDto {
  // type
  @IsInt()
  @ApiProperty()
  contentTypeId: number;

  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @ApiProperty()
  contentTypeName: string;

  // meta
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @ApiProperty()
  creator: string;

  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @ApiProperty()
  // TODO 별도 validator 로 검증 필요
  status: string;

  // body
  // TODO 별도 validator 로 검증
  @ValidateNested()
  @ApiProperty({
    example: `{bodyFieldId: number, bodyFieldName: string, bodyFieldValue: string,}[]`,
  })
  body: ContentBodyDto[];
}
