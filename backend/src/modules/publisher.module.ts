import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from '../entities/publisher.entity';
import { PublisherService } from '../services/publisher.service';
import { PublisherController } from '../controllers/publisher.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Publisher])], controllers: [PublisherController], providers: [PublisherService], exports: [PublisherService],
}) export class PublisherModule {}