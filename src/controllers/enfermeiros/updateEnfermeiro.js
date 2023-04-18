// S14 - Atualização dos dados de Enfermeiros

const Enfermeiro = require("../../models/enfermeiro")

async function updateEnfermeiro(request, response) {
    try {
        const id = request.params.id 
        const enfermeiroInDatabase = await Enfermeiro.findByPk(id)

        if(!enfermeiroInDatabase) {
            return response.status(404).json({message: 'Enfermeiro não encontrado'})
        }

        enfermeiroInDatabase.nome_completo = request.body.nome_completo || enfermeiroInDatabase.nome_completo
        enfermeiroInDatabase.genero = request.body.genero || enfermeiroInDatabase.genero
        enfermeiroInDatabase.data_de_nascimento = request.body.data_de_nascimento || enfermeiroInDatabase.data_de_nascimento
        enfermeiroInDatabase.cpf = request.body.cpf || enfermeiroInDatabase.cpf
        enfermeiroInDatabase.telefone = request.body.telefone || enfermeiroInDatabase.telefone
        enfermeiroInDatabase.instituicao_de_ensino_formacao = request.body.instituicao_de_ensino_formacao || enfermeiroInDatabase.instituicao_de_ensino_formacao
        enfermeiroInDatabase.cadastro_cofen_uf = request.body.cadastro_cofen_uf || enfermeiroInDatabase.cadastro_crm_uf
        
        await enfermeiroInDatabase.save()

        return response.json(enfermeiroInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = updateEnfermeiro;