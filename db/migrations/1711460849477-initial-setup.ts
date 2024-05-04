import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1711460849477 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS user_profile (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255),
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS category (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS expense (
                id SERIAL PRIMARY KEY,
                amount DECIMAL(10, 2) NOT NULL,
                description TEXT,
                user_profile_id INT,
                category_id INT,
                FOREIGN KEY (user_profile_id) REFERENCES user_profile(id),
                FOREIGN KEY (category_id) REFERENCES category(id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS expense`);
        await queryRunner.query(`DROP TABLE IF EXISTS category`);
        await queryRunner.query(`DROP TABLE IF EXISTS user_profile`);
    }
}
