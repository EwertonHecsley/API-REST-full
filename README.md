# Projeto de Estudo: Criptografia com bcrypt e Autenticação de Rotas com JWT

Este é um projeto de estudo desenvolvido para aprender sobre criptografia usando bcrypt e autenticação de rotas usando JWT (JSON Web Tokens).

## Objetivo do Projeto

O objetivo deste projeto é adquirir conhecimentos sobre técnicas de criptografia segura e autenticação de rotas em aplicações web. O projeto foi criado com o propósito de aprendizado e não tem finalidades comerciais ou de produção.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e linguagens:

- Node.js
- Express.js
- PostgreSQL (banco de dados)
- bcrypt (para criptografia de senhas)
- JSON Web Tokens (JWT) (para autenticação de rotas)

## Instalação

Siga os passos abaixo para executar o projeto em sua máquina local:

1. Clone este repositório para o seu diretório local:
```
git clone https://github.com/EwertonHecsley/API-REST-full
```
cd caminho/do/projeto

2. Instale as dependências do projeto:

```
npm install
```

3. Configure o banco de dados PostgreSQL:

Crie um banco de dados PostgreSQL e configure as credenciais no arquivo `conexaoBD.js`.

4. Defina as variáveis de ambiente:

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente necessárias.

5. Inicie o servidor:

```
npm start
```

## Funcionalidades do Projeto

### 1. Cadastro de Usuário

Endpoint para cadastrar um novo usuário. O endpoint realiza a criptografia da senha antes de armazená-la no banco de dados.

- Método: POST
- URL: `/usuario`

### 2. Login

Endpoint para autenticação do usuário. O endpoint verifica as credenciais do usuário e retorna um token JWT válido em caso de sucesso.

- Método: POST
- URL: `/login`

### 3. Cadastro de Pessoa

Endpoint protegido por autenticação. Permite cadastrar informações de uma pessoa associada ao usuário autenticado.

- Método: POST
- URL: `/pessoa`
- Autenticação: Token JWT válido deve ser incluído no cabeçalho da requisição.

## Requisitos do Sistema

- Node.js (versão 18 ou superior)
- PostgreSQL (banco de dados)

## Observações

Este projeto foi desenvolvido com fins educacionais e não é recomendado para uso em ambientes de produção.

## Autor

Ewerton Hecsley - [https://github.com/EwertonHecsley/API-REST-full](https://github.com/EwertonHecsley/API-REST-full)

---
