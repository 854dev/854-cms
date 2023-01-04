import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("bigint")
  expiredAt: string;

  @Column("varchar")
  contentTypeId: string;

  @Column("text")
  json: string;
}
