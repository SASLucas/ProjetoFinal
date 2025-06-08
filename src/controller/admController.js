const admSQL = require('../dao/admSQL');
const Adm = new admSQL

class funcoesAdm {
    cadastrarDisc(req, res) {
        const { nome } = req.body;
        Adm.criarDisciplina(nome);
        res.status(201).json({ mensagem: 'Disciplina criada com sucesso!' });
    }
        
       
    cadastrar_professor(req,res){
        const { nome,matricula} = req.body;
        Adm.adicionar_professor(nome,matricula);
         res.status(201).json({ mensagem: 'professor adicionado com sucesso!' });
    }
        
}

module.exports = funcoesAdm