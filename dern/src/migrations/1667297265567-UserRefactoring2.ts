import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring21667297265567 implements MigrationInterface {
    name = 'UserRefactoring21667297265567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "location" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "blog" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "twitterUsername" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitterUsername"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "blog"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "location"`);
    }

}
