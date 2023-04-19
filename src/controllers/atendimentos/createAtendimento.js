// S18 - Realização de Atendimento Médico

const Atendimento = require("../../models/atendimento")
const Paciente = require("../../models/paciente")
const Medico = require("../../models/medico")


async function createAtendimento(request, response) {

      try {
        const data = {
            paciente_id: request.body.paciente_id,
            medico_id: request.body.medico_id
        }

        if(!data.paciente_id || !data.medico_id) {
            return response.status(400).json({message: 'Ids ausentes'})
        }

        const pacienteInDatabase = await Paciente.findByPk(data.paciente_id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não existe'})
        }

       const atendimento = await Atendimento.create(data)

// Encontrar o paciente pelo ID e atualizar o contador de atendimentos e status do paciente
const paciente = await Paciente.findByPk(data.paciente_id)
paciente.total_de_atendimentos += 1
paciente.status_de_atendimento = 'ATENDIDO'
await paciente.save()

// Encontrar o médico pelo ID e atualizar o contador de atendimentos do médico
const medico = await Medico.findByPk(data.medico_id)
medico.total_de_atendimentos += 1
await medico.save()

response.json(atendimento)
    
    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'Não foi possivel processar sua solicitacao'})
    }

}

module.exports = createAtendimento;



        //atualizar o contador do médico e do paciente

       // findOne para pegar o paciente 
       // atualiza o total_de_atendimentos do paciente
       // atualiza a coluna status para ATENDIDO

       // findOne para pegar o médico 
       // atualiza o total_de_atendimentos do médico