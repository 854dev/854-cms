import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ContentBody } from './content-body.entity';

@Entity('content_body_field')
@Unique(['contentTypeId', 'schemaName'])
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

  @OneToMany(() => ContentBody, (body) => body.contentBodySchema)
  @Exclude({ toClassOnly: true })
  contentBody: ContentBody[];
}
