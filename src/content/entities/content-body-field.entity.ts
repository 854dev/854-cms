import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body_field')
export class ContentBodyField {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @Column({ type: 'int' })
  typeId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
