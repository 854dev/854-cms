import { Exclude } from 'class-transformer';
import { ContentBody } from 'src/content/entities/content-body.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('content_body_field')
export class ContentBodyField {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @Column({ type: 'int' })
  contentTypeId: number;

  @Column({ type: 'int' })
  fieldTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  fieldTypeName: string;

  @Column({ type: 'varchar', length: 100 })
  fieldName: string;

  @DeleteDateColumn()
  @Exclude({ toPlainOnly: true })
  deletedAt: Date;
}
