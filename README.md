<h1 align="center">Módulo 1 🎓 Projeto Avaliativo </h1>
<p align="center">Curso Lab365 - SESI SENAI - Projeto Floripa Mais Tec<p/>


![banner git - projeto avaliativo modulo1](https://user-images.githubusercontent.com/71991444/233677516-d8b2d792-157b-49d5-b230-14ea4600c301.jpg)

<p align="center">MEDIFACIL Software foi criado para automatizar determinados processos de gerenciamento em âmbito hospitalar. Esse Produto Viável Mínimo (Inglês: MVP) da API Rest, foi
construída utilizando JavaScript, ExpressJS e PostgreSQL.</p>



# Índice 

* [Resumo](#resumo)
* [Pré-Requisitos](#Pré-Requisitos)
* [Dependências](Dependências)
* [Técnicas e padrões utilizadas](Técnicas-e-padrões-utilizadas)
* [Instalação](Instalação)
* [Endpoints](Endpoints-Rotas)
* [Documentação do Projeto](Em-andamento)

# Resumo

Repositório criado para entrega do Projeto avaliativo do curso...

# Pré-Requisitos

Para trabalhar com essa aplicação você vai precisar:

* Um ambiente Node.js > v160.0

# Dependências

| Plugin | Versão | Uso |
| ------ | ------ | ------ |
| Sequelize | ^6.31.0 |Gerenciar modelos da aplicação |
| dotenv | ^16.0.3 | Gerenciar modelos da aplicação |
| express | ^4.18.2 | Gerenciar modelos da aplicação |
| nodemon | ^2.0.22 | Gerenciar modelos da aplicação |
| pg | ^8.10.0 | Gerenciar modelos da aplicação |
| pg-hstore | ^2.3.4 | Gerenciar modelos da aplicação |
| yup | ^1.0.2 | Gerenciar modelos da aplicação |

# Técnicas e padrões utilizadas

O projeto foi dividido em uma estruturas de pastas para melhor organização.

![image](https://user-images.githubusercontent.com/71991444/233700733-6c059aaf-31e4-4739-801b-154c70bb4a01.png)

| Plugin | Uso |
| ------ | ------ |
| /src/controllers | Contém todos modelos da aplicação |
| /src/database | Contém todos modelos da aplicação |
| /src/models | Contém todos modelos da aplicação |

# Instalação

Instale esse projeto usando o comando npm e clonando [Projeto Avaliativo](https://github.com/DeiseFAS/ProjetoAvaliativoModulo1) .

```bash
  clone o repositorio 
  npm install ProjetoAvaliativoModulo1
  cd ProjetoAvaliativoModulo1
```
# Endpoints - Rotas

Usaremos como exemplo as rotas do paciente, as demais rotas seguem a mesma lógica ou são mais semples.

## Cadastrar pacientes

Request:
* HTTP POST no path /api/pacientes
* No corpo da request, informar objeto json com os campos
* Todos os campos obrigatórios devem ser validados. O CPF deve serúnico por paciente. Validar se o CPF informado já foi cadastrado no sistema.

Exemplo:

```bash
  {
	"nome_completo": "Nina Simone",
   "genero": "F",
   "data_de_nascimento": "1933-02-21",
   "cpf": "03184611931",
   "telefone": "388232366",
   "contato_de_emergencia": "988562321",
   "lista_de_alergias": "pelo de capivara",
   "lista_de_cuidados_especificos": "não ficar com o pé molhado",
   "convenio": "Jazz",
   "status_de_atendimento": "NAO_ATENDIDO",
   "total_de_atendimentos": "0"
	}
```


Response:
* HTTP Status Code 201 (CREATED) em caso de sucesso, constando no
corpo da resposta o código atribuído ao novo paciente cadastrado, além
dos demais campos. No response, retornar os campos adicionais
“identificador” e “atendimentos”, usando obrigatoriamente estes nomes
para os campos.
Exemplo:

```bash
  {
	"id": 1,
	"nome_completo": "Nina Simone",
	"genero": "F",
	"data_de_nascimento": "1933-02-21",
	"cpf": "03184611931",
	"telefone": "388232366",
	"contato_de_emergencia": "988562321",
	"lista_de_alergias": "pelo de capivara",
	"lista_de_cuidados_especificos": "não ficar com o pé molhado",
	"convenio": "Jazz",
	"status_de_atendimento": "NAO_ATENDIDO",
	"total_de_atendimentos": 0,
	"updatedAt": "2023-04-21T20:47:36.716Z",
	"createdAt": "2023-04-21T20:47:36.716Z"
}
```

* HTTP Status Code 400 (Bad Request) em caso de requisição
com dados inválidos, informando mensagem de erro explicativa
no corpo do response.
Exemplo:

```bash
 {
	"message": "Preencha todos os campos obrigatórios."
}
```

* HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado,
informando mensagem de erro explicativa no corpo do response.
Exemplo:

```bash
  {
	"message": "CPF já cadastrado"
}
```






















