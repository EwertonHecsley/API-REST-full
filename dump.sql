create table
    usuarios(
        id serial primary key,
        nome text not null,
        email text not null unique,
        senha text not null
    );

CREATE TABLE
    pessoas(
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        cidade TEXT NOT NULL,
        idade INT,
        id_usuario INT REFERENCES usuarios(id),
        data_criacao DATE DEFAULT now()
    );