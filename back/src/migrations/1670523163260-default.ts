import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670523163260 implements MigrationInterface {
    name = 'default1670523163260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD \`medic_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_eb8fc87ba7265439a9d38aef720\` FOREIGN KEY (\`medic_id\`) REFERENCES \`medics\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_eb8fc87ba7265439a9d38aef720\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP COLUMN \`medic_id\``);
    }

}
