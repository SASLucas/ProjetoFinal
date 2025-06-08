const express = require('express');
const router = express.Router();
const funcoesProfessor= require('../controller/profController')
const prof_adiciona = new funcoesProfessor

router.post('/alunos', (res, req) => prof_adiciona.cadastrar_professor(res, req))


module.exports = router