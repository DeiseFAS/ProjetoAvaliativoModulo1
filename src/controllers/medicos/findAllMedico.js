// S10 - Listagem de Médicos

const Medico = require('../../models/medico')

async function findAllMedico(request, response) {

    try {
        const filtros = request.query
        console.log("filtros", filtros)
        if(filtros.status) {

            if (!['ATIVO', 'INATIVO'].includes(filtros.status)) {
                return response.json({ message: 'O status deve ser: ATIVO ou INATIVO' })
            }
        
            const medicos = await Medico.findAll(
                {
                    where: {
                        estado_no_sistema: filtros.status
                    }
                }
            ) 
            response.json(medicos) 
        } else {
            const medicos = await Medico.findAll() 
            response.json(medicos) 
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = findAllMedico;