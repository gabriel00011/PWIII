const mysql = require("mysql")

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "facil123",
    database: "dados"
})


// inserção de dados
function insertDados(req, res, next) {

    const nome = req.body.nome
    const cidade = req.body.cidade
    const telefone = req.body.telefone

    con.connect((err) => {

        const insertDados = "insert into dadoscliente(nome, cidade, telefone) values (?, ?, ?)"

        con.query(insertDados, [nome, cidade, telefone], (err, result) => {
            if (!!result)
                res.send("Cadastrado com sucesso !!!")
        })

    })

}


// leitura de dados
function readDados(req, res, next) {

    con.connect((err) => {
        const readDados = "select * from dadoscliente"

        con.query(readDados, (err, result) => {
            res.json(result)
        })
    })

}


// atualização de dados
function updateDados(req, res, next) {

    const nome = req.body.nome
    const newName = req.body.newname

    con.connect((err) => {

        const updateDadosNome = "update dadoscliente set nome = ? where nome = ? "


        con.query(updateDadosNome, [newName, nome], (err, result) => {
            if (!!result) {
                res.send("atuzalizado com sucesso !!!")
            }
        })

    })

}


// exclusão de dados
function deleteDados(req, res, next) {

    const nome = req.body.nome
    const cidade = req.body.cidade
    const telefone = req.body.telefone

    con.connect((err) => {
        const deleteDados = "delete from dadoscliente where (nome = ? or cidade = ? or telefone = ?)  "

        con.query(deleteDados, [nome, cidade, telefone], (err, result) => {
            if (!!result)
                res.send("deletado com sucesso !!!");

        })
    })

}



module.exports = { insertDados, readDados, updateDados, deleteDados }