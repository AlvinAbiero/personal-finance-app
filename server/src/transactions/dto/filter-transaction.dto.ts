import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  Min,
  Max,
  IsUUID,
  IsIn,
  IsBoolean,
} from 'class-validator';
import { TRANSACTION_CATEGORIES } from 'src/utils/constants';

export class FilterTransactionsDto {
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsOptional()
  @IsString()
  @IsIn(TRANSACTION_CATEGORIES)
  type?: string;

  @IsOptional()
  @IsNumber()
  minAmount?: number;

  @IsOptional()
  @IsNumber()
  maxAmount?: number;

  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsBoolean()
  isRecurring?: boolean;

  @IsOptional()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Min(1)
  @Max(100)
  limit: number = 10;

  @IsOptional()
  @IsString()
  sortBy: 'date' | 'amount' | 'category' = 'date';

  @IsOptional()
  @IsString()
  sortOrder: 'asc' | 'desc' = 'desc';
}
