import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676523948419 implements MigrationInterface {
    name = 'migration1676523948419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body" ADD "contentId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content_core" ADD "typeId" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_core" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "content_body" DROP COLUMN "contentId"`);
    }

}
