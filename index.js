const express = require('express')
const conexao = require('./src/database')


const createPaciente = require('./src/controllers/pacientes/createPaciente')

const deletePaciente = require('./src/controllers/pacientes/deletePaciente');

const app = express()
app.use(express.json())



app.post('/api/pacientes', createPaciente )

app.delete('/api/pacientes/:id', deletePaciente)




conexao.sync({alter: true})



app.listen(6666, () => {
    console.log("Projeto online")
})