import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsIn,
} from 'class-validator';
import {
  SUPPORTED_CURRENCIES,
  SUPPORTED_LANGUAGES,
} from '../../utils/constants';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be atleast 8 characters long' })
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsIn(SUPPORTED_CURRENCIES)
  currency: string = 'USD';

  @IsIn(SUPPORTED_LANGUAGES)
  language: string = 'en';
}
