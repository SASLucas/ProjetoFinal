const express = require('express');
const router = express.Router();
const funcoesMonitor = require('../controller/monitorController')
const monitor_adiciona = new funcoesMonitor

router.post('/plantao', (res, req) => monitor_adiciona.cadastrar_plantao(res, req))
router.post('/login', (req, res) => monitor_adiciona.acharMonitor(req, res))

module.exports = router