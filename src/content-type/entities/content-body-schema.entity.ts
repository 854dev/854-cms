import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('content_body_schema')
@Unique(['fieldType', 'fieldName'])
export class ContentBodyField {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @Column({ type: 'int' })
  contentTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  fieldType: string;

  @Column({ type: 'varchar', length: 100 })
  fieldName: string;
}