// S02 - Atualização dos dados de Pacientes

const Paciente = require("../../models/paciente")

async function updatePaciente(request, response) {
    try {
        const id = request.params.id 
        const pacienteInDatabase = await Paciente.findByPk(id)

        if(!pacienteInDatabase) {
            return response.status(404).json({message: 'Paciente não encontrado'})
        }

        pacienteInDatabase.nome_completo = request.body.nome_completo || pacienteInDatabase.nome_completo
        pacienteInDatabase.genero = request.body.genero || pacienteInDatabase.genero
        pacienteInDatabase.data_de_nascimento = request.body.data_de_nascimento || pacienteInDatabase.data_de_nascimento
        pacienteInDatabase.cpf = request.body.cpf || pacienteInDatabase.cpf
        pacienteInDatabase.telefone = request.body.telefone || pacienteInDatabase.telefone
        pacienteInDatabase.contato_de_emergencia = request.body.contato_de_emergencia || pacienteInDatabase.contato_de_emergencia
        pacienteInDatabase.lista_de_alergias = request.body.lista_de_alergias || pacienteInDatabase.lista_de_alergias
        pacienteInDatabase.lista_de_cuidados_especificos = request.body.lista_de_cuidados_especificos || pacienteInDatabase.lista_de_cuidados_especificos
        pacienteInDatabase.convenio = request.body.convenio || pacienteInDatabase.convenio

        await pacienteInDatabase.save()

        return response.json(pacienteInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possivel processar sua solicitação.' })
    }
}

module.exports = updatePaciente;


