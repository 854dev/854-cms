import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Content {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  data: string;

  @Column("varchar")
  contentTypeId: string;

  @Column("uuid")
  createdByUserId: string;

  @Column("uuid")
  lastUpdatedByUserId: string;

  @Column()
  @CreateDateColumn()
  createdOn: Date;

  @Column()
  @UpdateDateColumn()
  updatedOn: Date;

  @Column()
  url: string;
}
