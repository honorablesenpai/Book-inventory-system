import { Entity,PrimaryGeneratedColumn, Column, OneTomany } from 'typeorm';
import { Book } from './book.entity';
import { Publisher } from './publisher.entity';

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;

    @Column({ type: 'text', nullable: true})
    biogragphy: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    District: string;

     @Column({type: 'varchar', length: 255, nullable: true})
    Country: string;

     @Column({type: 'date', nullable: true})
    DateOfBirth: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @OneTomany(() => Book, (book) => book.author)
    books: Book[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @ManyToOne (() => Author, (author) => author.books, { eager: true})
    author: Author;

    @ManyToOne(() => Publisher, (publisher) => publisher.books, { eager: true})
    @JoinColumn({ name: 'publisherId' })
    publisher: Publisher;

    @OneTomany(() => InventoryRecord, (record) => record.book)
    inventoryRecords: InventoryRecord[];






}