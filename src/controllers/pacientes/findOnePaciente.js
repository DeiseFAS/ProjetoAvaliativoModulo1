const Paciente = require('../../models/paciente')

async function findOnePaciente(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const pacienteInDatabase = await Paciente.findByPk(id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        return response.json(pacienteInDatabase)
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
};


module.exports = findOnePaciente;





 

