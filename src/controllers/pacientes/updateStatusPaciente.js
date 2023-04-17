const Paciente = require("../../models/paciente")

async function updateStatusPaciente(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const pacienteInDatabase = await Paciente.findByPk(id)

        if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"].includes(request.body.status)) {
            return response.status(400).json({ message: 'O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' })
        }

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        pacienteInDatabase.status_de_atendimento = request.body.status

        await pacienteInDatabase.save()

        return response.json(pacienteInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = updateStatusPaciente;
