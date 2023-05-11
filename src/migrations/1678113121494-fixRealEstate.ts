import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstate1678113121494 implements MigrationInterface {
    name = 'fixRealEstate1678113121494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
