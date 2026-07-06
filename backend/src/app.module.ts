import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
    
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: postgresql://postgress:[#Crazy 460000]@db.eupxbgwpbrnjipnwsuuv.supabase.co:5432/postgres,
    autoLoadEntities: true,
    synchronize: true,
    ssl: { rejectUnauthorized: false },

  }),
    AuthorModule, BookModule, PublisherModule, SchoolModule, InventoryRecordModule,
],
}) export class AppModule {}