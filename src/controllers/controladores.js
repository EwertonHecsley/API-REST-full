const bcrypt = require('bcrypt');
const pool = require('../conexaoBD');

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

module.exports = {
    cadastrarUsuario
}