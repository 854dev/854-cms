import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676530928218 implements MigrationInterface {
    name = 'migration1676530928218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "common_code" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "value" character varying NOT NULL, "isActive" boolean NOT NULL, "sort" integer NOT NULL, CONSTRAINT "PK_766a567bded15689da9ae452de8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "common_code"`);
    }

}
