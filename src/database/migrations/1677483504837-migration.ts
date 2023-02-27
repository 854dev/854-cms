import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1677483504837 implements MigrationInterface {
    name = 'migration1677483504837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body_field" ADD "fieldTypeName" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_body_field" DROP COLUMN "fieldTypeName"`);
    }

}
