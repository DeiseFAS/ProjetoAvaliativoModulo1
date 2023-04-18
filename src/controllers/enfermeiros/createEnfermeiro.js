// S13 - Cadastro de Enfermeiro

const Enfermeiro = require("../../models/enfermeiro")

async function createEnfermeiro(request, response) {
 
    try {
        const enfermeiro = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_de_nascimento: request.body.data_de_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_de_ensino_formacao: request.body.instituicao_de_ensino_formacao,
            cadastro_cofen_uf: request.body.cadastro_cofen_uf,      
        }
        
        const cpfExiste = await Enfermeiro.findOne({ 
            where: { cpf: request.body.cpf } 
        })
    
        if(!cpfExiste) {
            const novoEnfermeiro = await Enfermeiro.create(enfermeiro)
             response.status(201).json(novoEnfermeiro)

        }else{
            response.status(409).json({message: "cpf já cadastrado"})
        }
    
    } catch (error) {
        return response.status(400).json({message: 'Não foi possivel processar sua solicitação'})
    }
}

module.exports = createEnfermeiro;