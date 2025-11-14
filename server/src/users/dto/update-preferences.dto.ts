import { IsOptional, IsBoolean, IsInt, Min, Max } from 'class-validator';

export class UpdatePreferencesDto {
  @IsOptional()
  @IsBoolean()
  notificationsEnabled?: boolean;

  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(100)
  alertThreshold?: number;
}
