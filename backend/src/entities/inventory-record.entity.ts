import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Book } from './book.entity';
import { School } from './school.entity';

@Entity('inventory_records')
@Index(['bookId', 'schoolId'], { unique: true})
export class InventoryRecord {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'uuid' })
    bookId!: string;

    @Column({ type: 'uuid' })
    schoolId!: string;

    @Column({ type: 'int', default: 0})
    quantityAvailable!: number;

    @Column({ type: 'int', default: 0})
    quantityBorrowed!: number;

    @Column({ type: 'int', default: 0})
    quantityDamaged!: number;

    @Column({ type: 'int', default: 0})
    quantityLost!: number;

    @Column({ type: 'varchar', length: 50, nullable: true})
    location!: string;

    @Column({ type: 'varchar', length: 50, default: 'Availabel'})
    status!: string;

     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    lastCheckDate!: Date;

    @ManyToOne(() => Book, (book) => book.inventoryRecord, { eager: true })
    @JoinColumn({ name: 'bookId' })
    book!: Book;

    @ManyToOne(() => School, (school) => school.inventoryRecord, { eager: true })
    @JoinColumn({ name: 'schoolId '})
    school!: School;

    get totalQuantity(): number {
        return this.quantityAvailable + this.quantityBorrowed + this.quantityDamaged + this.quantityLost
    }
    


}