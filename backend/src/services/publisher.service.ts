import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publisher } from '@/entities/publisher.entity';
import { CreatePublisherDto } from '../dtos/create-publisher.dto';
import { UpdatePublisherDto } from '@/dtos/update-publisher.dto';

@Injectable()
export class PublisherService {
    constructor( @InjectRepository(Publisher) private publisherRepository: Repository<Publisher>, ) {}

    async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
        const publisher = this.publisherRepository.create(createPublisherDto);
        return await this.publisherRepository.save(publisher);
    }

    async findOne(id: string): Promise<Publisher> {
        const publisher = await this.publisherRepository.findOne({ where: { id } });
        if (!publisher) {
            throw new NotFoundException(`Publisher with ID ${id} not found`);
        }
        return publisher;

    }

    async findAll(): Promise<Publisher[]> {
        return await this.publisherRepository.find();
    }

    async update(id: string, updatePublisherDto: UpdatePublisherDto): Promise<Publisher> {
        const publisher = await this.findOne(id);
        Object.assign(publisher, updatePublisherDto);
        return await this.publisherRepository.save(publisher);
    }

    async remove(id: string): Promise<void> {
        const publisher = await this.findOne(id);
        await this.publisherRepository.remove(publisher);
    }
}