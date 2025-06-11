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
      adicionar_atividade(conteudo){
  let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO atividades (conteudo)
    VALUES (?)
`, [conteudo]) 
    }
    adicionar_monitor(matricula_monitor){
  let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO monitor (matricula)
    VALUES (?)
`, [matricula_monitor]) 
    }
}

module.exports = SQLprof
