import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  dateTime: Date;

  @Column()
  author: string;

  @Column('decimal', { precision: 10, scale: 2 })
  sum: number;

  @Column()
  category: string;

  @Column('text')
  comment: string;
}
