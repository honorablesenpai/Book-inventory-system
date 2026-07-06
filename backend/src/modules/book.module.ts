import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { BookService } from '@/services/book.service';
import { BookController } from '@/controllers/book.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Book])], controllers: [BookController], providers: [BookService], exports: [BookService],
}) export class BookModule {}