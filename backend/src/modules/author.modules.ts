import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '@/entities/author.entity';
import { AuthorService } from '@/services/author.service';
import { AuthorController } from '@/controllers/author.controllers';

@Module({
    imports: [TypeOrmModule.forFeature([Author])], controllers: [AuthorController], providers: [AuthorService], exports: [AuthorService],
}) export class AuthorModule {}