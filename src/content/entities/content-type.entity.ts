import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContentCore } from './content-core.entity';

@Entity('content_type')
export class ContentType {
  @PrimaryGeneratedColumn()
  @OneToMany(() => ContentCore, (contentCore) => contentCore.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
