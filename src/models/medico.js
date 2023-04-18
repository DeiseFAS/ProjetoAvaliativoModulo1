const Sequelize = require('sequelize')
const conexao = require('../database')

const Medicos = conexao.define('medico', {
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
     cadastro_crm_uf: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     especializacao_clinica: {
        type: Sequelize.ENUM("CLINICO_GERAL", "ANESTESISTA", "DERMATOLOGIA", "GINECOLOGIA", "NEUROLOGIA", "PEDIATRIA", "PSIQUIATRIA", "ORTOPEDIA"),
     },
     total_de_atendimentos: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
     },
     estado_no_sistema: {
        type: Sequelize.ENUM("ATIVO", "INATIVO"),
     }    
})

module.exports = Medicos;