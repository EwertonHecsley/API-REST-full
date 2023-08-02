require('dotenv').config();
const jwt = require('jsonwebtoken');
const pool = require('../conexaoBD');

const autenticacao = async (req, res, next) => {
    const { authorization } = req.headers;

    const api_key = process.env.SENHA_API_KEY;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    };

    const token = authorization.split(' ')[1];

    const { id } = jwt.verify(token, api_key);

    const usuario = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [id]);

    if (usuario.rows.length === 0) {
        return res.status(404).json({ mensagem: 'Usuário não autorizado' });
    };

    req.usuario = usuario.rows[0];

    next();

};

module.exports = { autenticacao };