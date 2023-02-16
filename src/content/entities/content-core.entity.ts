import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContentMeta } from './content-meta.entity';

@Entity('content_core')
export class ContentCore {
  @PrimaryGeneratedColumn()
  @OneToOne(() => ContentMeta, (contentMeta) => contentMeta.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @JoinColumn()
  typeId: number;
}
