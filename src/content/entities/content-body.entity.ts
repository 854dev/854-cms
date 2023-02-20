import { ContentBodyField } from 'src/content-body-field/entities/content-body-field.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(
    (type) => ContentBodyField,
    (contentBodyField) => contentBodyField.id
  )
  contentBodyField: ContentBodyField;
}
