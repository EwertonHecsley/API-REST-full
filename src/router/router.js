const express = require('express');
const { cadastrarUsuario, login, cadastrarPessoa } = require('../controllers/controladores');
const { verificaCamposCadUsuarios } = require('../middlewares/intermediarios');
const { autenticacao } = require('../middlewares/autenticador');
const rota = express.Router();

rota.post('/usuario', verificaCamposCadUsuarios, cadastrarUsuario); //Rota para cadastrar usuário

rota.post('/login', login);

rota.use(autenticacao);

rota.post('/pessoa', cadastrarPessoa);


module.exports = rota;