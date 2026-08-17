import { IsUUID, IsNumber, IsOptional, IsString, IsDateString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateInventoryRecordDto {
    @IsOptional()
    @IsUUID()
    bookId?: string;

    @IsOptional()
    @IsUUID()
    schoolId?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityAvailable?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityBorrowed?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityDamaged?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityLost?: number;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    location?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    status?: string;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsDateString()
    lastCheckDate?: string;
}