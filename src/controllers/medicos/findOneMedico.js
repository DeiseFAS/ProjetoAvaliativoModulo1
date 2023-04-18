// S11 - Listagem de Médico pelo identificador

const Medico = require('../../models/medico')

async function findOneMedico(request, response) {
    try {
        const id = request.params.id 
        const medicoInDatabase = await Medico.findByPk(id)

        if(!medicoInDatabase) {
            return response.status(404).json({message: 'Médico não encontrado'})
        }

        return response.json(medicoInDatabase)
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
};

module.exports = findOneMedico;