import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('content_body_field')
@Unique(['contentTypeId', 'fieldName'])
export class ContentBodySchema {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  fieldId: number;

  @Column({ type: 'int' })
  contentTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  fieldType: string;

  @Column({ type: 'varchar', length: 100 })
  fieldName: string;
}
