import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ContentBodyDto } from './content-body-dto';
import { ContentTagDto } from './content-tag-dto';

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
    example: [
      {
        schemaId: 'number',
        schemaValue: 'string',
      },
    ],
  })
  body: ContentBodyDto[];

  @ValidateNested()
  @ApiProperty({
    example: [
      {
        tagId: 'number',
        name: 'string',
      },
    ],
  })
  tags: ContentTagDto[];
}
