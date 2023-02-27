import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1677519532894 implements MigrationInterface {
    name = 'migration1677519532894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "deletedAt"`);
    }

}
