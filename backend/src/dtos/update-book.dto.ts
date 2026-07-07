import { IsString, IsOptional, IsNumber, IsUUID, MaxLength, IsISBN } from 'class-validator';

export class UpdateBookDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsISBN()
    isbn?: string;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    issn?: string;

    @IsOptional()
    @IsNumber()
    publicationYear?: number;

    @IsOptional()
    @IsNumber()
    pageCount?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    language?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    category?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsUUID()
    authorId?: string;

    @IsOptional()
    @IsUUID()
    publisherId?: string;
}    