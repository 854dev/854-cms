import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  @Exclude({ toClassOnly: true })
  id: number;

  @Column({ type: 'int' })
  @Exclude({ toClassOnly: true })
  contentId: number;

  @Column({ type: 'int' })
  @Exclude({ toClassOnly: true })
  fieldId: number;

  @Column({ type: 'text', nullable: true })
  FieldValue: string;
}
