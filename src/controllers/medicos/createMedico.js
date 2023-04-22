// S07 - Cadastro de Médico

const Medico = require("../../models/medico")

async function createMedico(request, response) {
 
    try {
        const medico = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_de_nascimento: request.body.data_de_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_de_ensino_formacao: request.body.instituicao_de_ensino_formacao,
            cadastro_crm_uf: request.body.cadastro_crm_uf,
            especializacao_clinica: request.body.especializacao_clinica,
            total_de_atendimentos: request.body.total_de_atendimentos,
            estado_no_sistema: request.body.estado_no_sistema,         
        }
        
        if(!medico.nome_completo || !medico.data_de_nascimento || !medico.instituicao_de_ensino_formacao || !medico.cadastro_crm_uf){
            return response.status(400).json({message: 'Por favor, preencha todos os campos obrigatórios.'})
        }

        const cpfExiste = await Medico.findOne({ 
            where: { cpf: request.body.cpf } 
        })
    
        if(!cpfExiste) {
            const novoMedico = await Medico.create(medico)
             response.status(201).json(novoMedico)

        }else{
            response.status(409).json({message: "cpf já cadastrado"})
        }
    
    } catch (error) {
        return response.status(400).json({message: 'Não foi possivel processar sua solicitação'})
    }
}

module.exports = createMedico;