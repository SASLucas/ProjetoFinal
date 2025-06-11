const express = require('express');
const router = express.Router();
const funcoesProfessor= require('../controller/profController')
const prof_adiciona = new funcoesProfessor

router.post('/alunos', (res, req) => prof_adiciona.cadastrar_aluno(res, req))
router.post('/atividade', (res, req) => prof_adiciona.cadastrar_atividade(res, req))
router.post('/monitor', (res, req) => prof_adiciona.cadastrar_monitor(res, req))


module.exports = router