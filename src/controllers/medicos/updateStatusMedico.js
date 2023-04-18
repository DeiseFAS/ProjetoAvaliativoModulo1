const Medico = require("../../models/medico")

async function updateStatusMedico(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const medicoInDatabase = await Medico.findByPk(id)

        if(!medicoInDatabase) {
            return response.status(404).json({message: 'Medico não encontrado'})
        }

        medicoInDatabase.estado_no_sistema = request.body.status

        await medicoInDatabase.save()

        return response.json(medicoInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = updateStatusMedico;