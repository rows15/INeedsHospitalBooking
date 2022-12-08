import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670473251049 implements MigrationInterface {
    name = 'default1670473251049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`guardians\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`tel\` text NOT NULL, \`name\` text NOT NULL, \`password\` text NOT NULL, \`rg\` varchar(255) NOT NULL, \`patients\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` text NULL, \`tel\` text NULL, \`name\` text NULL, \`password\` text NULL, \`rg\` text NULL, \`bookings\` text NULL, \`guardian_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bookings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`initialDate\` timestamp NOT NULL, \`finalDate\` timestamp NOT NULL, \`patient_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`patients\` ADD CONSTRAINT \`FK_90669d59436f7a90cc170aae888\` FOREIGN KEY (\`guardian_id\`) REFERENCES \`guardians\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_94824eac901cfb902526e59f814\` FOREIGN KEY (\`patient_id\`) REFERENCES \`patients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_94824eac901cfb902526e59f814\``);
        await queryRunner.query(`ALTER TABLE \`patients\` DROP FOREIGN KEY \`FK_90669d59436f7a90cc170aae888\``);
        await queryRunner.query(`DROP TABLE \`bookings\``);
        await queryRunner.query(`DROP TABLE \`patients\``);
        await queryRunner.query(`DROP TABLE \`guardians\``);
    }

}
