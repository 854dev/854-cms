import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_type_field')
export class ContentTypeField {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  typeId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
