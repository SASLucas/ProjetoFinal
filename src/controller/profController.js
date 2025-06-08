const profSQL = require('../dao/professorSQL');
const prof = new profSQL

class funcoesProfessor {

    cadastrar_professor(req,res){
        const { nome_aluno,aluno_matricula} = req.body;
        prof.adicionar_aluno(nome_aluno,aluno_matricula);
         res.status(201).json({ mensagem: 'professor adicionado com sucesso!' });
    }
        
}

module.exports = funcoesProfessor