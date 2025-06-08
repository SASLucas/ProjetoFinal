const Database = require('../config/bd');

class SQLadm extends Database {
    constructor() {
        super()
    }
    criarDisciplina(nomeDisciplina) {
        let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO disciplina (nome)
    VALUES (?)
`, [nomeDisciplina])
    }


    adicionar_professor(nome_professor,matricula_professor){
  let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO professor (nome,matricula)
    VALUES (?,?)
`, [nome_professor,matricula_professor]) 
    }

}

module.exports = SQLadm

