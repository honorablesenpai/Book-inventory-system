import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRecord } from '../entities/inventory-record.entity';
import { InventoryRecordService } from '../services/inventory-record.service';
import { InventoryRecordController } from '../controllers/inventory-record.service';

@Module({
    imports: [TypeOrmModule.forFeature([InventoryRecord])], controllers: [InventoryRecordController], providers: [InventoryRecordService], exports: [InventoryRecordService],
}) export class InventoryRecordModule {}