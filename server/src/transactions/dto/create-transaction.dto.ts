import {
  IsBoolean,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  TRANSACTION_CATEGORIES,
  BILL_FREQUENCIES,
} from '../../utils/constants';

export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(TRANSACTION_CATEGORIES)
  category: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  contactName?: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsBoolean()
  @IsOptional()
  isRecurring?: boolean;

  @IsString()
  @IsOptional()
  @IsIn(BILL_FREQUENCIES)
  frequency?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
