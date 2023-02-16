import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676520705673 implements MigrationInterface {
    name = 'migration1676520705673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content_meta" ("id" SERIAL NOT NULL, "contentId" integer NOT NULL, "title" character varying(100) NOT NULL, "creator" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "status" character varying(100) NOT NULL, CONSTRAINT "PK_ca022380a217a9bc84183b8609c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "content_core" ("id" SERIAL NOT NULL, CONSTRAINT "PK_168ad8bbe1b7efca0cbbad5eb16" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "content_type_field" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_3df08516307467f3056315ec554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "content_type" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_897d132e80d29e6a50e458f9b06" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nickname" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`);
        await queryRunner.query(`DROP TABLE "content_type"`);
        await queryRunner.query(`DROP TABLE "content_type_field"`);
        await queryRunner.query(`DROP TABLE "content_core"`);
        await queryRunner.query(`DROP TABLE "content_meta"`);
    }

}
