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
  fieldValue: string;
}

export class CreateContentDto {
  // type
  @IsInt()
  contentTypeId: number;
  // meta
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  title: string;

  @IsString()
  @MaxLength(100)
  @MinLength(1)
  creator: string;

  @IsString()
  @MaxLength(100)
  @MinLength(1)
  // TODO 별도 validator 로 검증 필요
  status: string;

  // body
  // TODO 별도 validator 로 검증
  @ValidateNested()
  body: ContentBodyDto[];
}
