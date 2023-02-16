import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676533822687 implements MigrationInterface {
    name = 'migration1676533822687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "type_name"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "type_value"`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "typeId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "typeValue" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "typeValue"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "type_value" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_body" ADD "type_name" character varying(100) NOT NULL`);
    }

}
