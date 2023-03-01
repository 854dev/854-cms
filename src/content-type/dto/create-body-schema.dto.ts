import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateBodySchemaDto {
  @IsInt()
  contentTypeId: number;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  fieldType: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  fieldName: string;
}
