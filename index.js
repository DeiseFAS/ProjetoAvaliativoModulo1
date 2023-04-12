const express = require('express')
const conexao = require('./src/database')
const pacientes = require('./src/models/paciente')

const createPaciente = require('./src/controllers/pacientes/createPaciente')

const app = express()
app.use(express.json())

app.post('/api/pacientes', createPaciente )




conexao.sync({alter: true})



app.listen(6666, () => {
    console.log("Projeto online")
})