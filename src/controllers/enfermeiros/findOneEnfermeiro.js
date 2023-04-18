// S16 - Listagem de Enfermeiro pelo identificador

const Enfermeiro = require('../../models/enfermeiro')

async function findOneEnfermeiro(request, response) {
    try {
        const id = request.params.id 
        const enfermeiroInDatabase = await Enfermeiro.findByPk(id)

        if(!enfermeiroInDatabase) {
            return response.status(404).json({message: 'Enfermeiro não encontrado'})
        }

        return response.json(enfermeiroInDatabase)
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
};

module.exports = findOneEnfermeiro;