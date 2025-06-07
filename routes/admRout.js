const express = require('express');
const router = express.Router();
const funcoesAdm = require('../controller/admController')
const adicionarDisciplina = new funcoesAdm

router.post('/disciplinas', (res, req) => adicionarDisciplina.cadastrarDisc(res, req))

module.exports = router