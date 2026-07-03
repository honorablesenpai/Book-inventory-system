import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, } from '@nestjs/common';
import { InventoryRecordService } from '../services/inventory-record.service';
import { CreateInventoryRecordDto } from '../dtos/create-inventory-record.dto';
import { UpdateInventoryRecordDto } from '../dtos/update-inventory-record.dto';
import { InventoryRecord } form '../entities/inventory-record.entity';

@Controller('inventory-records')
export class InventoryRecordController {
    constructor ( private readonly inventoryRecordService: InventoryRecordService ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createInventoryRecordDto: createInventoryRecordDto): Promise<InventoryRecord> {
        return await this.inventoryRecordService.create(createInventoryRecordDto);
    }

    @Get()
    async findAll(): Promise<InventoryRecord[]> {
        return await this.inventoryRecordService.findAll();
    } 

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<InventoryRecord> {
        return await this.inventoryRecordService.findOne(id);
    } 

    @Put(':id')
    async update( @Param('id') id: string' @Body() updateInventoryRecordDto: UpdateInventoryRecordDto, ): Promise<InventoryRecord> {
        return await this.inventoryRecordService.update(id, updateInventoryRecordDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.inventoryRecordService.remove(id);
    }

    @Get('book/:bookId')
    async findByBook(@Param('bookId') bookId: string): Promise<InventoryRecord[]> {
        return await this.inventoryRecordService.findByBook(bookId);
    }

    @Get('school/:schoolId')
    async findByPublisher(@Param('schoolId') schoolId: string): Promise<InventoryRecord[]> {
        return await this.inventoryRecordService.findBySchool(schoolId);
    }
}