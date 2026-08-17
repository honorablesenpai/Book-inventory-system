import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorModule } from './modules/author.modules';
import { BookModule } from './modules/book.module';
import { PublisherModule } from './modules/publisher.module';
import { SchoolModule } from './modules/school.module';
import { InventoryRecordModule } from './modules/inventory-record.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    TypeOrmModule.forRootAsync({
      inject: [ConfigService], useFactory: (cfg: ConfigService) => ({ type: 'postgres', url: cfg.get<string>('DATABASE_URL'), 
        autoLoadEntities: true,
        synchronize: false, //using migrations instead od auto-sync
        ssl: cfg.get<boolean>('DB_SSL') === true || cfg.get('DB_SSL') === 'true' ?{ rejectUnauthorized: false} :false,
      }), 
    }),
    AuthorModule, BookModule, PublisherModule, SchoolModule, InventoryRecordModule,
],
}) export class AppModule {}