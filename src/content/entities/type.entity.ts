import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Core } from './core.entity';

@Entity('content_type')
export class TypeField {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Core, (core) => core.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
