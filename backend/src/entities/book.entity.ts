import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Author } from './author.entity';
import { Publisher } from './publisher.entity';
import { InventoryRecord } from './inventory-record.entity';

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 255})
    title!: string;

    @Column({ type: 'text', nullable: true})
    description!: string;

     @Column({ type: 'varchar', length: 20, unique: true})
    isbn!: string;

     @Column({ type: 'varchar', length: 20, nullable: true})
    issn!: string;

     @Column({ type: 'int'})
    publicationYear!: number;

    @Column({ type: 'int', nullable: true})
    pageCount!: number;

     @Column({ type: 'varchar', length: 50, nullable: true})
    language!: string;

     @Column({ type: 'varchar', length: 100, nullable: true})
    category!: string;

    @Column({ type: 'uuid' })
    authorId!: string;

    @Column({ type: 'uuid' })
    publisherId!: string;

    @OneToMany (() => InventoryRecord, (inventoryRecord) => inventoryRecord.book)
    inventoryRecord!: InventoryRecord[];

}