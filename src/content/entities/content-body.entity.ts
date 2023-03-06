import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContentBodySchema } from './content-body-schema.entity';

@Entity('content_body')
export class ContentBody {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ type: 'int' })
  @Exclude()
  contentId: number;

  @Column({ type: 'int' })
  @Exclude()
  schemaId: number;

  @Column({ type: 'text', nullable: true })
  schemaValue: string;

  @ManyToOne(() => ContentBodySchema, (schema) => schema.contentBody)
  @Exclude({ toClassOnly: true })
  contentBodySchema: ContentBodySchema;
}
