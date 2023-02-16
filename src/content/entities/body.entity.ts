import { Column, JoinColumn } from 'typeorm';

export class Body {
  @JoinColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  type_name: string;

  @Column({ type: 'text' })
  type_value: string;
}
