import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @Column({ type: 'int' })
  contentId: number;

  @Column({ type: 'varchar', length: 100 })
  bodyField: string;

  @Column({ type: 'text' })
  bodyFieldValue: string;
}
