const express = require('express');
const { cadastrarUsuario, login } = require('../controllers/controladores');
const { verificaCamposCadUsuarios } = require('../middlewares/intermediarios');
const rota = express.Router();

rota.post('/usuario', verificaCamposCadUsuarios, cadastrarUsuario); //Rota para cadastrar usuário

rota.post('/login', login);


module.exports = rota;