import { IsString, IsOptional, IsDataString, MaxLenghth } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    @MaxLenghth(255)
    name?: string;

    @IsOptional()
    @IsString()
    biograpghy?: string;

    @IsOptional()
    @IsString()
    @MaxLenghth(255)
    country?: string;

    @IsOptional()
    @IsDataString()
    dateOfBirth?: Date;

}