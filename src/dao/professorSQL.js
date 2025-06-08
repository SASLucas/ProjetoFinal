const Database = require('../config/bd');

class SQLprof extends Database {
    constructor() {
        super()
    }
    adicionar_aluno(nome_aluno,matricula_aluno){
  let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO aluno (nome,matricula)
    VALUES (?,?)
`, [nome_aluno,matricula_aluno]) 
    }

}

module.exports = SQLprof
