import { IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class UpdateAuthorDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    name?: string;

    @IsOptional()
    @IsString()
    biograpghy?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    country?: string;

     @IsOptional()
    @IsDateString()
    dateOfBirth?: Date;

}
