import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Unique(["username"])
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  username: string;

  @Column("varchar")
  salt: string;

  @Column("varchar")
  hash: string;

  @Column("text")
  profile: number;

  @Column()
  @CreateDateColumn()
  createdOn: Date;

  @Column()
  @UpdateDateColumn()
  updatedOn: Date;
}
