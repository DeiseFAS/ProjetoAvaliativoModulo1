const express = require('express')
const conexao = require('./src/database')


const createPaciente = require('./src/controllers/pacientes/createPaciente');
const deletePaciente = require('./src/controllers/pacientes/deletePaciente');
const findAllPaciente = require('./src/controllers/pacientes/findAllPaciente');
const findOnePaciente = require('./src/controllers/pacientes/findOnePaciente');
const updateStatusPaciente = require('./src/controllers/pacientes/updateStatusPaciente');
const updatePaciente = require('./src/controllers/pacientes/updatePaciente');

const createMedico = require('./src/controllers/medicos/createMedico');
const updateMedico = require('./src/controllers/medicos/updateMedico');
const updateStatusMedico = require('./src/controllers/medicos/updateStatusMedico');
const findAllMedico = require('./src/controllers/medicos/findAllMedico');
const findOneMedico = require('./src/controllers/medicos/findOneMedico');
const deleteMedico = require('./src/controllers/medicos/deleteMedico');

const createEnfermeiro = require('./src/controllers/enfermeiros/createEnfermeiro');
const updateEnfermeiro = require('./src/controllers/enfermeiros/updateEnfermeiro');
const findAllEnfermeiro = require('./src/controllers/enfermeiros/findAllEnfermeiro');

const app = express()
app.use(express.json())



app.post('/api/pacientes', createPaciente)
app.delete('/api/pacientes/:id', deletePaciente)
app.get('/api/pacientes', findAllPaciente)
app.get('/api/pacientes/:id', findOnePaciente)
app.put('/api/pacientes/:id/status', updateStatusPaciente)
app.put('/api/pacientes/:id', updatePaciente)

app.post('/api/medicos', createMedico)
app.put('/api/medicos/:id', updateMedico)
app.put('/api/medicos/:id/status', updateStatusMedico)
app.get('/api/medicos', findAllMedico)
app.get('/api/medicos/:id', findOneMedico)
app.delete('/api/medicos/:id', deleteMedico)

app.post('/api/enfermeiros', createEnfermeiro)
app.put('/api/enfermeiros/:id', updateEnfermeiro)
app.get('/api/enfermeiros', findAllEnfermeiro)


conexao.sync({alter: true})



app.listen(6666, () => {
    console.log("Projeto online")
})