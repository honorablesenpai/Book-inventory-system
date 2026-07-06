import { Entity,PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Book } from './book.entity';
import { Publisher } from './publisher.entity';
import { InventoryRecord } from './inventory-record.entity';

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    name!: string;

    @Column({ type: 'text', nullable: true})
    biogragphy!: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    District!: string;

     @Column({type: 'varchar', length: 255, nullable: true})
    Country!: string;

     @Column({type: 'date', nullable: true})
    DateOfBirth!: Date;

    @OneToMany(() => Book, (book) => book.authorId)
    books!: Book[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt!: Date;

    @ManyToOne (() => Author, (author) => author.books, { eager: true})
    author!: Author;

    @ManyToOne(() => Publisher, (publisher) => publisher.books, { eager: true})
    @JoinColumn({ name: 'publisherId' })
    publisher!: Publisher;

    @OneToMany(() => InventoryRecord, (record) => record.book)
    inventoryRecords!: InventoryRecord[];

}