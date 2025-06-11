const Database = require('../config/bd');

class SQMnonitor extends Database {
    constructor() {
        super()
    }
    adicionar_plantao(data) {
        let poolNovo = this.criarPool()
        poolNovo.execute(`
    INSERT INTO plantao (data)
    VALUES (?)
`, [data])
    }
    async procurarMonitor(matricula) {
        let poolNovo = await this.criarPool();
        const a = await poolNovo.execute(`
           SELECT matricula FROM monitor where matricula = ? 
            `, [matricula])
        return a;
    }
}

module.exports = SQMnonitor