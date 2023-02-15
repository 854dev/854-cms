import { Type } from 'class-transformer';
import { User } from 'src/account/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Meta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @JoinColumn()
  @OneToOne(() => User, (user) => user.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  contentId: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

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
