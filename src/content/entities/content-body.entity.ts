import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  contentId: number;

  @Column({ type: 'varchar', length: 100 })
  type_name: string;

  @Column({ type: 'text' })
  type_value: string;
}
