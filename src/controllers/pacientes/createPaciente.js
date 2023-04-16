const Pacientes = require("../../models/paciente")



async function createPaciente(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const paciente = {
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
            total_de_atendimentos: request.body.total_de_atendimentos,
            
        }
        
        const cpfExiste = await Pacientes.findOne({ 
            where: { cpf: request.body.cpf } 
        })
    
        if(!cpfExiste) {
            const novoPaciente = await Pacientes.create(paciente)
             response.status(201).json(novoPaciente)

        }else{
            response.status(409).json({message: "cpf já cadastrado"})
        }
    

    } catch (error) {
        return response.status(400).json({message: 'Não foi possivel processar a solicitacao'})
    }

}

module.exports = createPaciente;