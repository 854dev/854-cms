import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Meta } from './meta.entity';

@Entity('content_core')
export class Core {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Meta, (meta) => meta.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @JoinColumn()
  typeId: number;
}
