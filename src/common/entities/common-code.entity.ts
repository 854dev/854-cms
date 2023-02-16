import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  isActive: boolean;

  @Column()
  @Transform(({ value }) => parseInt(value))
  sort: number;
}
