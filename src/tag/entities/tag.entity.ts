import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ContentMeta } from 'src/content/entities/content-meta.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tagId: number;

  @Column()
  name: string;

  @ManyToMany(() => ContentMeta, (contentMeta) => contentMeta.tags)
  @JoinTable()
  contentMeta: ContentMeta[];
}
