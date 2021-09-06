const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const mysql = require("mysql")

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "facil123",
    database: "dados"
})

// importação do CRUD
const { insertDados, readDados, updateDados, deleteDados } = require("../backend/routeMysql")

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// manipuladores de rota
app.post("/insertDados", insertDados)

app.get("/readDados", readDados)

app.put("/updateDados", updateDados)

app.delete("/deleteDados", deleteDados)

app.use((req, res, next) => {
    res.status(404).send("Não encontrado")
})

app.listen(80, () => {
    console.log("executando >>>")
})