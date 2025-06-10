const express = require('express');
const LoginControl = require('../controller/loginControl');
const router = express.Router();

const loginCtrl = new LoginControl();

router.get('/', loginCtrl.loginView);
router.post('/', loginCtrl.login);
router.get('/logout', loginCtrl.logout);

module.exports = router;
