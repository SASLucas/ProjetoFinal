const Database = require('../config/bd');

class SQLadm extends Database {
    constructor() {
        super()
    }
    criarDisciplina() {
        this.pool.query(`
    INSERT INTO professor (nome,matricula)
    VALUES (?,?)
`)
    }
}

