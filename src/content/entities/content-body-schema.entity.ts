import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('content_body_field')
@Unique(['contentTypeId', 'fieldName'])
export class ContentBodySchema {
  @PrimaryGeneratedColumn()
  schemaId: number;

  @Column({ type: 'int' })
  @Exclude({ toClassOnly: true })
  contentTypeId: number;

  @Column({ type: 'varchar', length: 100 })
  schemaType: string;

  @Column({ type: 'varchar', length: 100 })
  schemaName: string;
}
