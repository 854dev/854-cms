import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676537344921 implements MigrationInterface {
    name = 'migration1676537344921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_core" RENAME COLUMN "typeId" TO "contentTypeId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_core" RENAME COLUMN "contentTypeId" TO "typeId"`);
    }

}
