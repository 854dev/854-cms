import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676520941408 implements MigrationInterface {
    name = 'migration1676520941408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content_body" ("id" SERIAL NOT NULL, "type_name" character varying(100) NOT NULL, "type_value" text NOT NULL, CONSTRAINT "PK_d01df37ea0be3120b4fbecd53fc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "content_body"`);
    }

}
