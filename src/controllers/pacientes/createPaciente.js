// S01 - Cadastro de Paciente

const Paciente = require("../../models/paciente")

async function createPaciente(request, response) {
    
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
        
        // validação de campos obrigatórios
        if(!paciente.nome_completo || !paciente.contato_de_emergencia || !paciente.data_de_nascimento){
            return response.status(400).json({message: 'Por favor, preencha todos os campos obrigatórios.'})
        }

        const cpfExiste = await Paciente.findOne({ 
            where: { cpf: request.body.cpf } 
        })
    
        if(!cpfExiste) {
            const novoPaciente = await Paciente.create(paciente)
             response.status(201).json(novoPaciente)

        }else{
            response.status(409).json({message: "CPF já cadastrado"})
        }
    
    } catch (error) {
        return response.status(400).json({message: 'Não foi possivel processar sua solicitacao.'})
    }

}

module.exports = createPaciente;