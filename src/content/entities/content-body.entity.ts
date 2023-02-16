import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @JoinColumn()
  contentId: number;

  @Column({ type: 'int' })
  @JoinColumn()
  bodyFieldId: number;

  @Column({ type: 'text' })
  bodyFieldValue: string;
}
