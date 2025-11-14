import { IsIn, IsOptional, IsString } from 'class-validator';
import { SUPPORTED_CURRENCIES, SUPPORTED_LANGUAGES } from 'src/utils/constants';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsIn(SUPPORTED_CURRENCIES)
  currency?: string;

  @IsOptional()
  @IsIn(SUPPORTED_LANGUAGES)
  language?: string;
}
