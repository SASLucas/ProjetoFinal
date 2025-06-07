const Database = require('../config/bd');

class SQLadm extends Database {
    constructor() {
        super()
    }
    criarDisciplina(nomeDisciplina) {
        const poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO disciplina (nome)
    VALUES (?)
`, [nomeDisciplina])
    }
}

module.exports = SQLadm

