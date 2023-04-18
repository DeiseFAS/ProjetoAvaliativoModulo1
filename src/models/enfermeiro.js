const Sequelize = require('sequelize')
const conexao = require('../database')

const Enfermeiros = conexao.define('enfermeiro', {
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
     },
     cpf: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     telefone: {
        type: Sequelize.STRING,
     },
     instituicao_de_ensino_formacao: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     cadastro_cofen_uf: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Enfermeiros;