const admSQL = require('../dao/admSQL');
const Adm = new admSQL

class funcoesAdm {
    cadastrarDisc(req, res) {
        const { nome } = req.body;
        Adm.criarDisciplina(nome);
        res.status(201).json({ mensagem: 'Disciplina criada com sucesso!' });
    }
}

module.exports = funcoesAdm