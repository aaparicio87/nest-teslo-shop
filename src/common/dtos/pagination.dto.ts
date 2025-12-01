import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @Min(1)
  @IsOptional()
  @Type(() => Number) // enableImplicitConversion: true
  limit?: number;

  @IsPositive()
  @IsOptional()
  @Type(() => Number) // enableImplicitConversion: true
  offset?: number;
}
