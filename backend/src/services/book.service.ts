import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';

@Injectable()
export class BookService {
    constructor( @InjectRepository(Book) private bookRepository: Repository<Book>, ) {}

    async create(createBookDto: CreateBookDto): Promise<Book[]> {
        const book = this.bookRepository.create(createBookDto);
        return await this.bookRepository.save(book);
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find({
             relations: ['author', "publisher"], 
            });
    }

    async findOne(id: string): Promise<Book> {
        const book = await this.bookRepository.findOne({ where: { id }, relations: ['author', 'publisher'], });
        if (!book) {
            throw new NotFoundException('Book with ID ${id}  not found');
        }
        return book;
    }

    async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
        const book = await this.findOne(id);
        Object.assign(book, updateBookDto);
        return await this.bookRepository.save(book);
    }

    async remove(id: string): Promise<void> {
        const book = await this.findOne(id);
        await this.bookRepository.remove(book);
    }

    async findByAuthor(authorid: string): Promise<Book[]> {
        return await this.bookRepository.find({ where: { authorid }, relations: ['author', 'publisher'], });
    }

    async findByPublisher(publisherid: string): Promise<Book[]> {
        return await this.bookRepository.find({ where: { publisherid }, relations: ['author', 'publisher'], });
    }
}