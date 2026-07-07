import { IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    @MaxLength(255)
    name?: string;

    @IsOptional()
    @IsString()
    biography?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    country?: string;

    @IsOptional()
    @IsDateString()
    dateOfBirth?: Date;

}