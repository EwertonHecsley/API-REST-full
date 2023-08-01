const pool = require('../conexaoBD');

const verificaCamposCadUsuarios = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos corretamente' });
    };

    try {
        const usuario = await pool.query(`SELECT email FROM usuarios WHERE email = $1`, [email]);

        if (usuario.rows.length > 0) {
            return res.status(400).json({ mensagem: 'Já existe usuário com cadastrado com o email informado' });
        };

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };

};


module.exports = { verificaCamposCadUsuarios }