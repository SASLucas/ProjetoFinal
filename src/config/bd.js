const mysql = require('mysql2');
require('dotenv').config();

class Database {
    constructor() {
        this.config = {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: null
        };
        this.pool = null;
        this.database = 'banco';
    }

    criarBanco(callback) {
        const connection = mysql.createConnection(this.config);
        connection.connect((err) => {
            if (err) {
                console.error('Erro na conexão:', err);
                return callback(err);
            }

            const sql = `CREATE DATABASE IF NOT EXISTS ${this.database}`;
            connection.query(sql, (err) => {
                connection.end();
                if (err) {
                    console.error('Erro ao criar banco:', err);
                    return callback(err);
                }
                console.log('Banco criado com sucesso!');
            });
        });
    }

    criarPool() {
        this.pool = mysql.createPool({
            ...this.config,
            database: this.database
        });
        return this.pool
    }

    criarTabelas() {
        this.pool.query(`
            CREATE TABLE IF NOT EXISTS aluno (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100),
                matricula INT UNIQUE
            )
        `);

        this.pool.query(`
            CREATE TABLE IF NOT EXISTS professor (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100),
                matricula INT UNIQUE
            )
        `);

        this.pool.query(`
            CREATE TABLE IF NOT EXISTS monitor (
                id INT AUTO_INCREMENT PRIMARY KEY,
                matricula INT UNIQUE,
                FOREIGN KEY (matricula) REFERENCES aluno(matricula)
            )
        `);

        this.pool.query(`
            CREATE TABLE IF NOT EXISTS disciplina (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                monitor_matricula INT,
                professor_matricula INT,
                FOREIGN KEY (monitor_matricula) REFERENCES monitor(matricula),
                FOREIGN KEY (professor_matricula) REFERENCES professor(matricula)
            )
        `);

        console.log('Tabelas criadas!');
    }

    criarTudo() {
        this.criarBanco();
        this.criarPool();
        this.criarTabelas()
    }
}

module.exports = Database;
