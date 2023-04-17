const express = require('express')
const conexao = require('./src/database')


const createPaciente = require('./src/controllers/pacientes/createPaciente')

const deletePaciente = require('./src/controllers/pacientes/deletePaciente');

const findAllPaciente = require('./src/controllers/pacientes/findAllPaciente');

const findOnePaciente = require('./src/controllers/pacientes/findOnePaciente');

const updateStatusPaciente = require('./src/controllers/pacientes/updateStatusPaciente')

const app = express()
app.use(express.json())



app.post('/api/pacientes', createPaciente )

app.delete('/api/pacientes/:id', deletePaciente)

app.get('/api/pacientes', findAllPaciente)

app.get('/api/pacientes/:id', findOnePaciente)

app.put('/api/pacientes/:id/status', updateStatusPaciente)


conexao.sync({alter: true})



app.listen(6666, () => {
    console.log("Projeto online")
})