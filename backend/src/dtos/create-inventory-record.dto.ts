import { IsUUID, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInventoryRecordDto {
    @IsUUID()
    bookId!: string;

    @IsUUID()
    schoolId!: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityAvailable?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityBorrowed?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityDamaged?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    quantityLost?: string;

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

}