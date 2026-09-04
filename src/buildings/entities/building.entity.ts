import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('buildings')
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'date', nullable: true })
  createdAt: Date = new Date();

  constructor(partial?: Partial<Building>) {
    Object.assign(this, partial);
  }
}