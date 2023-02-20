import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContentCore } from '../../content/entities/content-core.entity';
import { ContentBodyField } from './content-body-field.entity';

@Entity('content_type')
export class ContentType {
  @PrimaryGeneratedColumn()
  @OneToMany(() => ContentCore, (contentCore) => contentCore.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @OneToMany(() => ContentBodyField, (cbf) => cbf.contentTypeId, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
