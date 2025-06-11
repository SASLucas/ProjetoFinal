const MonitorSQL = require('../dao/monitorSQL');
const Monitor = new MonitorSQL

class funcoesMonitor {
    cadastrar_plantao(req, res) {
        const { data } = req.body;
        Monitor.adicionar_plantao(data);
        res.status(201).json({ mensagem: 'Disciplina criada com sucesso!' });
    }
    acharMonitor(req, res){
        const {matricula} = req.body;
        const tem = Monitor.procurarMonitor(matricula);
        if(!tem){
            res.status(404).json({ encontrado: false, mensagem: 'Não tem esse monitor' });
        }
        else{
            res.status(201).json({ encontrado: true, mensagem: 'Monitor encontrado' });
        }
    } 

}

module.exports = funcoesMonitor