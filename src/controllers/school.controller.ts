import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, } from '@nestjs/common';
import { SchoolService } from '../services/school.service';
import { CreateSchoolDto } from '../dtos/create-school.dto';
import { UpdateSchoolDto } from '../dtos/update-school.dto';
import { School } form '../entities/school.entity';

@Controller('schools')
export class SchoolController {
    constructor ( private readonly schoolService: SchoolService ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createSchoolDto: createSchoolDto): Promise<School> {
        return await this.schoolService.create(createSchoolDto);
    }

    @Get()
    async findAll(): Promise<School[]> {
        return await this.schoolService.findAll();
    } 

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<School> {
        return await this.schoolService.findOne(id);
    } 

    @Put(':id')
    async update( @Param('id') id: string' @Body() updateSchoolDto: UpdateSchoolDto, ): Promise<School> {
        return await this.bookService.update(id, updateBookDto);
    }

     @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.schoolService.remove(id);
    }

    @Get('city/:city')
    async findByCity(@Param('city') city: string): Promise<School[]> {
        return await this.schoolService.findByCity(city);
    }
}