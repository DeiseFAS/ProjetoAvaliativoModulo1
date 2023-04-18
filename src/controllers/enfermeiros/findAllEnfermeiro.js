// S15 - Listagem de Enfermeiros

const Enfermeiro = require('../../models/enfermeiro')

async function findAllEnfermeiro(request, response) {

    try {
        // const filtros = request.query
        // console.log("filtros", filtros)
        const enfermeiros = await Enfermeiro.findAll() 
        response.json(enfermeiros)

        // if(filtros.status) {

        //     if (!['AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'].includes(filtros.status)) {
        //         return response.json({ message: 'O status deve ser: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' })
        //     }
        
        //     const pacientes = await Paciente.findAll(
        //         {
        //             where: {
        //                 status_de_atendimento: filtros.status
        //             }
        //         }
        //     ) 
        //     response.json(pacientes) 
        // } else {
        //     const pacientes = await Paciente.findAll() 
        //     response.json(pacientes) 
        // }
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação' })
    }
}

module.exports = findAllEnfermeiro;