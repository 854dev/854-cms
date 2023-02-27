import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateBodyFieldDto {
  @IsInt()
  contentTypeId: number;

  // todo 조인된 코드 컬럼 밸리데이션
  @IsInt()
  fieldTypeId: number;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  fieldNfieldTypeNameame: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  fieldName: string;
}
