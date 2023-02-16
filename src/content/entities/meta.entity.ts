import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('content_meta')
export class Meta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @JoinColumn()
  contentId: number;

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
  @Exclude({ toPlainOnly: true })
  deletedAt: Date;

  @Column({ type: 'varchar', length: 100 })
  status: string;
}
