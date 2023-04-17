const Paciente = require('../../models/paciente')

async function deletePaciente(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const pacienteInDatabase = await Paciente.findByPk(id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        await pacienteInDatabase.destroy()

        return response.status(204).json()
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = deletePaciente;














