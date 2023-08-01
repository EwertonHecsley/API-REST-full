require('dotenv').config();
const bcrypt = require('bcrypt');
const pool = require('../conexaoBD');
const jwt = require('jsonwebtoken');


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    try {
        const usuario = await pool.query(`
        INSERT INTO usuarios(nome,email,senha)
        VALUES($1,$2,$3) RETURNING id,nome,email
        `, [nome, email, senhaCriptografada]);

        //const { senha: senhaOculta, ...usuarioFormatado } = usuario.rows[0]; // esta linha de cod para ocultar email, caso traga * no BD

        return res.status(201).json(usuario.rows[0]);

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    const api_key = process.env.SENHA_API_KEY;

    try {
        const usuario = await pool.query(`SELECT * FROM usuarios WHERE email = $1`, [email]);

        if (usuario.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        };

        const verificaSenhaHash = await bcrypt.compare(senha, usuario.rows[0].senha);

        if (!verificaSenhaHash) {
            return res.status(401).json({ mensagem: 'Senha inválida' })
        }

        const { senha: _, ...usuarioPayload } = usuario.rows[0];

        const token = jwt.sign(usuarioPayload, api_key, { expiresIn: '1h' });

        const usuarioFormatado = {
            usuario: usuarioPayload,
            token
        };

        return res.status(200).json(usuarioFormatado);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    cadastrarUsuario,
    login
}