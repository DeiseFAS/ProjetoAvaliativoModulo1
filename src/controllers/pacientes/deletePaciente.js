// S06 - Exclusão de Paciente

const Paciente = require('../../models/paciente')

async function deletePaciente(request, response) {
    try {
        const id = request.params.id 
        const pacienteInDatabase = await Paciente.findByPk(id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        await pacienteInDatabase.destroy()

        return response.status(204).json()
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = deletePaciente;














