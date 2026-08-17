import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryRecord } from '../entities/inventory-record.entity';
import { CreateInventoryRecordDto } from '../dtos/create-inventory-record.dto';
import { UpdateInventoryRecordDto } from '../dtos/update-inventory-record.dto';

@Injectable()
export class InventoryRecordService {
    constructor( @InjectRepository(InventoryRecord) private inventoryRecordRepository: Repository<InventoryRecord>, ) {}

    async create(createInventoryRecordDto: CreateInventoryRecordDto): Promise<InventoryRecord> {
        const inventoryRecord = this.inventoryRecordRepository.create(
            createInventoryRecordDto as unknown as Partial<InventoryRecord>,
        ) as InventoryRecord;
        return await this.inventoryRecordRepository.save(inventoryRecord);
    }

    async findAll(): Promise<InventoryRecord[]> {
        return await this.inventoryRecordRepository.find({ 
            relations: {
                book: true,
                school: true,
            }, 
        });
    }

    async findOne(id: string): Promise<InventoryRecord> {
        const inventoryRecord = await this.inventoryRecordRepository.findOne({ where: { id },
             relations: {
                book: true,
                school: true,
        
            },
        });
        if (!inventoryRecord) {
            throw new NotFoundException('Inventory Record with ID ${id}  not found');
        }
        return inventoryRecord;  
    }

       async update(id: string, updateInventoryRecordDto: UpdateInventoryRecordDto): Promise<InventoryRecord> {
        const inventoryRecord = await this.findOne(id);
        Object.assign(inventoryRecord, updateInventoryRecordDto);
        return await this.inventoryRecordRepository.save(inventoryRecord);
    }

    async remove(id: string): Promise<void> {
        const inventoryRecord = await this.findOne(id);
        await this.inventoryRecordRepository.remove(inventoryRecord);
    }

    async findByBook(bookid: string): Promise<InventoryRecord[]> {
        return await this.inventoryRecordRepository.find({ where: {bookId: bookid }, 
            relations: {
                book: true,
                school: true,
            },
         });
    }

    async findBySchool(schoolid: string): Promise<InventoryRecord[]> {
        return await this.inventoryRecordRepository.find({ where: { schoolId: schoolid },
             relations: {
                book: true,
                school: true,
             },
         });
    }
}