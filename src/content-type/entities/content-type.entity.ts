import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('content_type')
@Unique(['contentTypeName'])
export class ContentType {
  @PrimaryGeneratedColumn()
  contentTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  contentTypeName: string;

  @DeleteDateColumn()
  @Exclude({ toPlainOnly: true })
  deletedAt: Date;
}
