// S05 - Listagem de Paciente pelo identificador

const Paciente = require('../../models/paciente')

async function findOnePaciente(request, response) {
    try {
        const id = request.params.id 
        const pacienteInDatabase = await Paciente.findByPk(id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        return response.json(pacienteInDatabase)
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
};

module.exports = findOnePaciente;





 

