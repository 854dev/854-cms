import { ContentBodyField } from 'src/content-body-field/entities/content-body-field.entity';
import {
  Column,
  Entity,
  IsNull,
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

  @Column({ type: 'varchar', length: 100 })
  bodyFieldName: string;

  @Column({ type: 'text' })
  bodyFieldValue: string;
}
