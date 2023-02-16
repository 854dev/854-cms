import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_code')
export class CommonCode {
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
