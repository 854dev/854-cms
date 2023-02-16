import { Column, Entity, JoinColumn } from 'typeorm';

@Entity('content_body')
export class ContentBody {
  @JoinColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  type_name: string;

  @Column({ type: 'text' })
  type_value: string;
}
