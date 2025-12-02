import { IsOptional, IsString, IsUUID } from 'class-validator';

export class FindOneDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsString()
  slug?: string;
}
