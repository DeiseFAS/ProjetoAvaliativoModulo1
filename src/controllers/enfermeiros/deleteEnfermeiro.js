// S17 - Exclusão de Enfermeiro

const Enfermeiro = require('../../models/enfermeiro')

async function deleteEnfermeiro(request, response) {
    try {
        const id = request.params.id 
        const enfermeiroInDatabase = await Enfermeiro.findByPk(id)

        if(!enfermeiroInDatabase) {
            return response.status(404).json({message: 'Enfermeiro não encontrado'})
        }

        await enfermeiroInDatabase.destroy()

        return response.status(204).json()
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = deleteEnfermeiro;