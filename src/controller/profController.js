const profSQL = require('../dao/professorSQL');
const Prof = new profSQL

class funcoesProfessor {

    cadastrar_aluno(req,res){
        const { nome_aluno,aluno_matricula} = req.body;
        Prof.adicionar_aluno(nome_aluno,aluno_matricula);
         res.status(201).json({ mensagem: 'professor adicionado com sucesso!' });
    }
     cadastrar_atividade(req,res){
        const { conteudo } = req.body;
        Prof.adicionar_atividade(conteudo);
         res.status(201).json({ mensagem: 'atividade adicionado com sucesso!' });
    }
    cadastrar_monitor(req,res){
        const {monitor_matricula} = req.body;
        Prof.adicionar_monitor(monitor_matricula);
         res.status(201).json({ mensagem: 'monitor adicionado com sucesso!' });
    }
        
}

module.exports = funcoesProfessor