import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('content_meta')
export class ContentMeta {
  @PrimaryGeneratedColumn()
  contentId: number;

  @Column({ type: 'int' })
  @Exclude()
  contentTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  contentTypeName: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  /** 서비스 내 사용자라면 user.nickname을 사용.
   *  user 에 없을수 있음 */
  @Column({ type: 'varchar', length: 100 })
  creator: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ type: 'varchar', length: 100 })
  status: string;
}
