const Sequelize = require('sequelize')
const conexao = require('../database')

const Pacientes = conexao.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
     },
     nome_completo: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     genero: {
        type: Sequelize.STRING,
     },
     data_de_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
     },
     cpf: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     telefone: {
        type: Sequelize.STRING,
     },
     contato_de_emergencia: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     lista_de_alergias: {
        type: Sequelize.STRING,
     },
     lista_de_cuidados_especificos:{
        type: Sequelize.STRING,
     },
     convenio: {
        type: Sequelize.STRING,
     },
     status_de_atendimento: {
        type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"),
     },
     total_de_atendimentos: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
     }
})

module.exports = Pacientes