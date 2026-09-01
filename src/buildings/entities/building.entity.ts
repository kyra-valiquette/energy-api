import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('buildings')
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'int' })
  yearBuilt: number;

  constructor(partial?: Partial<Building>) {
    Object.assign(this, partial);
  }
}