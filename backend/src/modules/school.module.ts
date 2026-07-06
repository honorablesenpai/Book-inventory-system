import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from '../entities/school.entity';
import { SchoolService } from '../services/school.service';
import { SchoolController } from '../controllers/school.controller';

@Module({
    imports: [TypeOrmModule.forFeature([School])], controllers: [SchoolController], providers: [SchoolService], exports: [SchoolService],
}) export class SchoolModule {}