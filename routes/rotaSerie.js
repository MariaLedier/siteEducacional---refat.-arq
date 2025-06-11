const express = require('express');
const SerieControl = require('../controller/serieControl');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

let ctrl = new SerieControl();
let auth = new AuthMiddleware();

router.get('/listar', auth.validar, ctrl.listar);

module.exports = router;