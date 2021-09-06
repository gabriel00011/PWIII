create database dados

create table DadosCliente(
    ID_CLIENTE INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    telefone varchar(30) NOT NULL,
    cidade varchar(30) NOT NULL
)