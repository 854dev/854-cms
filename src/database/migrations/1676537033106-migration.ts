import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676537033106 implements MigrationInterface {
    name = 'migration1676537033106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "typeValue"`);
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "bodyFieldId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "bodyFieldValue" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "contentTypeId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "fieldTypeId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "fieldName" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "fieldName"`);
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "fieldTypeId"`);
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "contentTypeId"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "bodyFieldValue"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "bodyFieldId"`);
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "typeId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "typeValue" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "typeId" integer NOT NULL`);
    }

}
