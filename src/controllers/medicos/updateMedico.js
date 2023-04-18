// S08 - Atualização dos dados de Médicos

const Medico = require("../../models/medico")

async function updateMedico(request, response) {
    try {
        const id = request.params.id 
        const medicoInDatabase = await Medico.findByPk(id)

        if(!medicoInDatabase) {
            return response.status(404).json({message: 'Médico não encontrado'})
        }

        medicoInDatabase.nome_completo = request.body.nome_completo || medicoInDatabase.nome_completo
        medicoInDatabase.genero = request.body.genero || medicoInDatabase.genero
        medicoInDatabase.data_de_nascimento = request.body.data_de_nascimento || medicoInDatabase.data_de_nascimento
        medicoInDatabase.cpf = request.body.cpf || medicoInDatabase.cpf
        medicoInDatabase.telefone = request.body.telefone || medicoInDatabase.telefone
        medicoInDatabase.instituicao_de_ensino_formacao = request.body.instituicao_de_ensino_formacao || medicoInDatabase.instituicao_de_ensino_formacao
        medicoInDatabase.cadastro_crm_uf = request.body.cadastro_crm_uf || medicoInDatabase. cadastro_crm_uf
        medicoInDatabase.especializacao_clinica = request.body.especializacao_clinica || medicoInDatabase.especializacao_clinica
        medicoInDatabase.total_de_atendimentos = request.body.total_de_atendimentos || medicoInDatabase.total_de_atendimentos
        medicoInDatabase.estado_no_sistema = request.body.estado_no_sistema || medicoInDatabase.estado_no_sistema

        await medicoInDatabase.save()

        return response.json(medicoInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = updateMedico;