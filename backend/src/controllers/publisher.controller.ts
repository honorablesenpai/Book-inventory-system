import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, } from '@nestjs/common';
import { PublisherService } from '../services/publisher.service';
import { CreatePublisherDto } from '../dtos/create-publisher.dto';
import { UpdatePublisherDto } from '../dtos/update-publisher.dto';
import { Publisher } from '../entities/publisher.entity';

@Controller('publishers')
export class PublisherController {
    constructor ( private readonly publisherService: PublisherService ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
        return await this.publisherService.create(createPublisherDto);
    }

    @Get()
    async findAll(): Promise<Publisher[]> {
        return await this.publisherService.findAll();
    } 

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Publisher> {
        return await this.publisherService.findOne(id);
    } 

    @Put(':id')
    async update( @Param('id') id: string, @Body() updatePublisherDto: UpdatePublisherDto ): Promise<Publisher> {
        return await this.publisherService.update(id, updatePublisherDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.publisherService.remove(id);
    }
}