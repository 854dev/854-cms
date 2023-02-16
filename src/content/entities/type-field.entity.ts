import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_type_field')
export class TypeField {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  typeId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
