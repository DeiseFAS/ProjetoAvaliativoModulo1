// S09 - Atualização do Estado do Médico no sistema

const Medico = require("../../models/medico")

async function updateStatusMedico(request, response) {
    try {
        const id = request.params.id 
        const medicoInDatabase = await Medico.findByPk(id)

        if (!['ATIVO', 'INATIVO'].includes(request.body.status)) {
            return response.status(400).json({ message: 'O status deve ser ATIVO ou INATIVO' })
        }

        if(!medicoInDatabase) {
            return response.status(404).json({message: 'Médico não encontrado'})
        }

        medicoInDatabase.estado_no_sistema = request.body.status

        await medicoInDatabase.save()

        return response.json(medicoInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = updateStatusMedico;