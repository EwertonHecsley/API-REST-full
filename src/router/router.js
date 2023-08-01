const express = require('express');
const { cadastrarUsuario } = require('../controllers/controladores');
const { verificaCamposCadUsuarios } = require('../middlewares/intermediarios');
const rota = express.Router();

rota.post('/usuario', verificaCamposCadUsuarios, cadastrarUsuario); //Rota para cadastrar usuário


module.exports = rota;