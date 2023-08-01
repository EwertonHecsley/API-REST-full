const express = require('express');
const { cadastrarUsuario } = require('../controllers/controladores');
const rota = express.Router();

rota.post('/usuario', cadastrarUsuario); //Rota para cadastrar usuário


module.exports = rota;