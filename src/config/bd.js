const mysql = require('mysql2');
require('dotenv').config();

class Database {
    constructor() {
        this.config = {
            host: 'localhost',
            user: 'root',
            password: 'lucas16',
            database: null
        }
        this.pool = null
    }
    criarBanco() {
        const connection = mysql.createConnection(this.config)
        connection.connect()
        const sql = `CREATE DATABASE IF NOT EXISTS banco`
        connection.query(sql);
        connection.end()
        this.database = 'banco'
    }
    criarPool() {
        this.pool = mysql.createPool(this.config)
    }
    criarTabelas() {
        this.pool.query(`
        CREATE TABLE IF NOT EXISTS ${this.database}.aluno  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            matricula INT UNIQUE
        )`),
            this.pool.query(`
        CREATE TABLE IF NOT EXISTS ${this.database}.professor  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            matricula INT UNIQUE
        )
    `),
            this.pool.query(`
        CREATE TABLE IF NOT EXISTS ${this.database}.monitor  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            matricula INT UNIQUE,
            FOREIGN KEY (matricula) REFERENCES aluno(matricula)
        )
    `),
            this.pool.query(`
            CREATE TABLE IF NOT EXISTS ${this.database}.disciplina (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                monitor_matricula INT,
                professor_matricula INT,
                FOREIGN KEY (monitor_matricula) REFERENCES monitor(matricula),
                FOREIGN KEY (professor_matricula) REFERENCES professor(matricula)
                )
        `)

    }
    criarTudo() {
        this.criarBanco();
        this.criarPool()
        this.criarTabelas()
    }
}

module.exports = Database