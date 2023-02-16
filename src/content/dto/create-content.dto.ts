import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

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
  body: any;
}
