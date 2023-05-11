import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1683790420881 implements MigrationInterface {
    name = 'CreateItem1683790420881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`createdAt\` varchar(255) NOT NULL, \`updatedAt\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`item\``);
    }

}
