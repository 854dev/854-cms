import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContentMeta } from './content-meta.entity';

@Entity('content_core')
export class ContentCore {
  @PrimaryGeneratedColumn()
  @OneToOne(() => ContentMeta, (contentMeta) => contentMeta.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @Column({ type: 'int' })
  @JoinColumn()
  typeId: number;
}
