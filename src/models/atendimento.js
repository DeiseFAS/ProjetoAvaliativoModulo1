const Sequelize = require('sequelize')
const conexao = require('../database')
const Paciente = require('./paciente')
const Medico = require('./medico')

const Atendimentos = conexao.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
     },
     medico_id: {
        type: Sequelize.INTEGER,
        allowNull: false
     }
   
});

Atendimentos.belongsTo(Paciente)
Atendimentos.belongsTo(Medico)

module.exports = Atendimentos;
