import { BaseEntity, Column, Entity, OneToOne } from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Profile extends BaseEntity {
  @OneToOne(() => User, (user) => user.user_id)
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
