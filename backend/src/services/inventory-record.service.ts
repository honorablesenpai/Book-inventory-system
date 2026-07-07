import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryRecord } from '../entities/inventory-record.entity';
import { CreateInventoryRecordDto } from '../dtos/create-inventory-record.dto';
import { UpdateInventoryRecordDto } from '../dtos/update-inventory-record.dto';

@Injectable()
export class InventoryRecordService {
    constructor( @InjectRepository(InventoryRecord) private InventoryRecordRepository: Repository<InventoryRecord>, ) {}

    async create(createInventoryRecordDto: CreateInventoryRecordDto): Promise<InventoryRecord[]> {
        const inventoryRecord = this.InventoryRecordRepository.create(createInventoryRecordDto );
        return await this.InventoryRecordRepository.save(inventoryRecord);
    }

    async findAll(): Promise<InventoryRecord[]> {
        return await this.InventoryRecordRepository.find({ 
            relations: {
                book: true,
                school: true,
            } 
        });
    }

    async findOne(id: string): Promise<InventoryRecord> {
        const inventoryRecord = await this.InventoryRecordRepository.findOne({ where: { id },
             relations: {
                book: true,
                school: true,
             }
             });
        if (!inventoryRecord) {
            throw new NotFoundException('Inventory Record with ID ${id}  nnot found');
        }
        return inventoryRecord;  
    }

       async update(id: string, updateInventoryRecordDto: UpdateInventoryRecordDto): Promise<InventoryRecord> {
        const inventoryRecord = await this.findOne(id);
        Object.assign(inventoryRecord, updateInventoryRecordDto);
        return await this.InventoryRecordRepository.save(inventoryRecord);
    }

    async remove(id: string): Promise<void> {
        const inventoryRecord = await this.findOne(id);
        await this.InventoryRecordRepository.remove(inventoryRecord);
    }

    async findByBook(bookid: string): Promise<InventoryRecord[]> {
        return await this.InventoryRecordRepository.find({ where: {
             bookId: bookid }, 
            relations: {
                book: true,
                school: true,
            }
         });
    }

    async findBySchool(schoolid: string): Promise<InventoryRecord[]> {
        return await this.InventoryRecordRepository.find({ where: { 
            schoolId: schoolid },
             relations: {
                book: true,
                school: true,
             }
         });
    }
}