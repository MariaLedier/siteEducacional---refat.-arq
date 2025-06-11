const express = require('express');
const DisciplinaControl = require('../controller/disciplinaControl');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

let ctrl = new DisciplinaControl();
let auth = new AuthMiddleware();

router.get('/', auth.validar, ctrl.listar)

module.exports = router;