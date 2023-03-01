import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  contentId: number;

  @Column({ type: 'varchar', length: 100 })
  bodyField: string;

  @Column({ type: 'text' })
  bodyFieldValue: string;
}
