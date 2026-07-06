import { IsUUID, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateInventoryRecordDto {
    @IsUUID()
    bookId: string;

    @IsUUID()
    schoolId: string;

    @IsOptional()
    @IsNumber()
    quantityAvailable?: string;

    @IsOptional()
    @IsNumber()
    quantityBorrowed?: string;

    @IsOptional()
    @IsNumber()
    quantityDamaged?: string;

    @IsOptional()
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