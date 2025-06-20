const express = require('express');
const HomeControl = require('../controller/homeControl');

const router = express.Router();

let ctrl = new HomeControl();
router.get('/', ctrl.home);
router.get('/contato', ctrl.contato);
router.get('/sobre', ctrl.sobre);
router.get('/ensino', ctrl.ensino);
router.get('/professores', ctrl.professores);
router.get('/galeria', ctrl.galeria);
router.get('/jornal', ctrl.jornal);
router.get('/noticias', ctrl.noticias);

module.exports = router;
