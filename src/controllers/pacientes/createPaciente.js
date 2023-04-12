const pacientes = require("../../models/paciente")



async function createPaciente(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const data = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_de_nascimento: request.body.data_de_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            contato_de_emergencia: request.body.contato_de_emergencia,
            lista_de_alergias: request.body.lista_de_alergias,
            lista_de_cuidados_especificos: request.body.lista_de_cuidados_especificos,
            convenio: request.body.convenio,
            status_de_atendimento: request.body.status_de_atendimento,
            total_de_atendimentos: request.body.total_de_atendimentos
            
        }
    
        const pacienteExiste = await pacientes.findOne({ 
            where: { nome_completo: request.body.nome_completo } 
        })
    
        if(pacienteExiste) {
            return response.status(409).json({message: 'Paciente já cadastrado'})
        }
    
        const pacientes = await paciente.create(data)
    
        response.status(201).json(paciente)

    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'Não foi possivel processar a solicitacao'})
    }

}

module.exports = createPaciente