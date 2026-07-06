import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, } from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { Book } form '../entities/book.entity';

@Controller('books')
export class BookController {
    constructor ( private readonly bookService: BookService ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createBookDto: createBookDto): Promise<Book> {
        return await this.bookService.create(createBookDto);
    }

    @Get()
    async findAll(): Promise<Book[]> {
        return await this.bookService.findAll();
    } 

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Book> {
        return await this.bookService.findOne(id);
    } 

    @Put(':id')
    async update( @Param('id') id: string' @Body() updateBookDto: UpdateBookDto, ): Promise<Book> {
        return await this.bookService.update(id, updateBookDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.bookService.remove(id);
    }

    @Get('author/:authorId')
    async findByAuthor(@Param('authorId') authorId: string): Promise<Book[]> {
        return await this.bookService.findByAuthor(authorId);
    }

    @Get('publisher/:publisherId')
    async findByPublisher(@Param('publisherId') publisherId: string): Promise<Book[]> {
        return await this.bookService.findByPublisher(publisherId);
    }
}