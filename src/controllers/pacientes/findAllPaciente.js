const Paciente = require('../../models/paciente')

async function findAllPaciente(request, response) {

    // request.body -> pegar o json do body
    // request.params -> pegar o json dos params
    // request.query ->  pegar os parametros da URL


    try {
        const filtros = request.query
        console.log("filtros", filtros)
        if(filtros.status) {

            if (!['AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'].includes(filtros.status)) {
                return response.json({ message: 'O status deve ser: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' })
            }
        
            const pacientes = await Paciente.findAll(
                {
                    where: {
                        status_de_atendimento: filtros.status
                    }
                }
            ) // busca todos os pacientes do banco de dados
            response.json(pacientes) // retorna todos os pacientes buscados
        } else {
            const pacientes = await Paciente.findAll() // busca todos os pacientes do banco de dados
            response.json(pacientes) // retorna todos os pacientes buscados
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}

module.exports = findAllPaciente;




















// const Pacientes = require('../../models/paciente')

// async function findPaciente (request, response)  {
//     try {
//         const Pacientes = awaitPacientes.findAll({
//             where: {
//             id: request.body.id
//         }})
//         response.json(paciente)
//     } catch (error) {
//         response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
//     }
// };

// module.exports = findPacientes;