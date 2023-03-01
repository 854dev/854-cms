import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContentTypeDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  contentTypeName: string;
}
