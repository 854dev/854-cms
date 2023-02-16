import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676532126169 implements MigrationInterface {
    name = 'migration1676532126169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content_body_field" ("id" SERIAL NOT NULL, "typeId" integer NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_990240732377726a6889dc16ee1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "content_body_field"`);
    }

}
