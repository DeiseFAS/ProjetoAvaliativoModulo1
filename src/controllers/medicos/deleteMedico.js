// S12 - Exclusão de Médico

const Medico = require('../../models/medico')

async function deleteMedico(request, response) {
    try {
        const id = request.params.id 
        const medicoInDatabase = await Medico.findByPk(id)

        if(!medicoInDatabase) {
            return response.status(404).json({message: 'Médico não encontrado'})
        }

        await medicoInDatabase.destroy()

        return response.status(204).json()
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = deleteMedico;