import { IsString, IsOptional, IsNumber, IsUUID, MaxLength, IsISBN } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @MaxLength(255)
    title!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsISBN()
    isbn!: string;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    issn?: string;

    @IsNumber()
    publicationYear!: number;

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

    @IsUUID()
    authorId!: string;

    @IsUUID()
    publisherId!: string
}