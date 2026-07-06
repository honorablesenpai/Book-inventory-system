import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, } from '@nestjs/common';
import { AuthorService } from '../services/author.service';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { UpdateAuthorDto } from '../dtos/update-author.dto';
import { Author } from '../entities/author.entity';

@Controller('authors')
export class AuthorController {
    constructor ( private readonly authorService: AuthorService ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return await this.authorService.create(createAuthorDto);
    }

    @Get()
    async findAll(): Promise<Author[]> {
        return await this.authorService.findAll();
    } 

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Author> {
        return await this.authorService.findOne(id);
    } 

    @Put(':id')
    async update(@Param('id') id: string  @Body() updateAuthorDto: UpdateAuthorDto, ): Promise<Author> {
        return await this.authorService.update(id, updateAuthorDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id'), id: string): Promise<void> {
        return await this.authorService.remove(id);
    }
}