import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsEmail()
  username: string;

  @IsString()
  @MinLength(8, { message: 'password length 8 ~ 20 only' })
  //영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  first_name?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  last_name?: string;
}
