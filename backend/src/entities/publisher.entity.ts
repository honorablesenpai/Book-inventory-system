import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity('publishers')
export class Publisher {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 255, unique: true})
    name!: string;

     @Column({ type: 'varchar', length: 255, nullable: true})
    city!: string;

     @Column({ type: 'varchar', length: 255, nullable: true})
    country!: string;

     @Column({ type: 'varchar', length: 20, nullable: true})
    phone!: string;

     @Column({ type: 'varchar', length: 255, nullable: true})
    email!: string;

     @Column({ type: 'text', nullable: true})
    website!: string;

     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt!: Date;

     @OneToMany(() => Book, (book) => book.publisherId)
    books!: Book[];


}