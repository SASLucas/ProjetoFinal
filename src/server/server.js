const express = require('express');
const routes = require('../routes/admRout');
const route1 = require('../routes/profRout');
const route3  = require('../routes/monitorRout')
const cors = require('cors')
const Database = require('../config/bd');
const iniciar = new Database

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ["POST", 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))
app.use(routes);
app.use(route1);
app.use(route3);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

iniciar.criarTudo()
