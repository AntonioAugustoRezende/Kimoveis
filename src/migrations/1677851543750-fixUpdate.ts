import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUpdate1677851543750 implements MigrationInterface {
    name = 'fixUpdate1677851543750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
