const express = require('express');
const router = express.Router();
const funcoesAdm = require('../controller/admController')
const adm_adiciona = new funcoesAdm

router.post('/disciplinas', (res, req) => adm_adiciona.cadastrarDisc(res, req))
router.post('/professores', (res, req) => adm_adiciona.cadastrar_professor(res, req))

module.exports = router