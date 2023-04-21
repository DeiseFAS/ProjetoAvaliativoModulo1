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

Serviço de cadastro de Paciente, possui os seguintes atributos:
- Identificador: Um número que deve ser incrementado automaticamente
- Nome Completo: Deve ser um texto
- Gênero: Deve ser um texto
- Data de Nascimento: Obrigatório, data válida.
- CPF: Deve ser texto
- Telefone: Deve ser texto
- Contato de Emergência: Obrigatório, Deve ser texto
- Lista de Alergias: Não obrigatório para a criação da classe
- Lista de Cuidados Específicos: Não obrigatório para a criação da classe
- Convênio: Não obrigatório para a criação da classe
- Status de Atendimento: Um paciente pode estar com as seguintes situações:
Aguardando Atendimento
Em Atendimento
Atendido
- Não Atendido
- Total de atendimentos realizados.
Este item é um contador que inicia em zero. Sempre que um médico
realiza um atendimento este valor deve ser incrementado.

Request:
* **HTTP POST no path /api/pacientes**
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

## Atualização dos dados de Pacientes

Serviço para alterar/atualizar os dados de determinado paciente.
O usuário do sistema poderá alterar sempre que necessário.

Request:
* **HTTP PUT no path /api/pacientes/{identificador}**
* No corpo da request, informar objeto json com os campos , exceto o
status do atendimento e total_de_atendimentos .
* Os campos validados como sendo obrigatórios devem possuir os valores
possíveis para estes campos.
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
   "convenio": "Jazz"
}
```


○ Response:
- HTTP Status Code 200 (OK) em caso de sucesso, constando no corpo da
resposta os dados atualizados do paciente. 
Exemplo: nesse caso, mudamos o nome artistico de Nina Simone, pelo nome de batismo Eunice Kathleen Waymon.

```bash
 {
	"id": 1,
	"nome_completo": "Eunice Kathleen Waymon",
	"genero": "F",
	"data_de_nascimento": "1933-02-21",
	"cpf": "03184611931",
	"telefone": "388232366",
	"contato_de_emergencia": "32665163",
	"lista_de_alergias": "pelo de capivara",
	"lista_de_cuidados_especificos": "não ficar com o pé molhado",
	"convenio": "Jazz",
	"status_de_atendimento": "NAO_ATENDIDO",
	"total_de_atendimentos": 0,
	"createdAt": "2023-04-21T19:29:26.276Z",
	"updatedAt": "2023-04-21T21:44:47.603Z"
}
```


- HTTP Status Code 400 (Bad Request) em caso de requisição com dados
inválidos, informando mensagem de erro explicativa no corpo do
response.
Exemplo: 

```bash
{
	"message": "Não foi possivel processar sua solicitação."
}
```

- HTTP Status Code 404 (Not Found) em caso de não ser encontrado
registro com o código informado, retornando mensagem de erro
explicativa no corpo do response.
Exemplo:/api/pacientes/15
colocamos um id inesistente.

```bash
{
	"message": "Paciente não encontrado."
}
```

## Atualização do Status de Atendimento

Serviço para alterar/atualizar os dados de determinado paciente.
O usuário do sistema poderá alterar sempre que necessário.

Request:

- **HTTP PUT no path /api/pacientes/{identificador}/status**
- No corpo da request, informar objeto json com os campos.
- O campo deve ser validado como sendo obrigatório e pertencente aos
valores possíveis para este campo.

```bash
{
    "status": "NAO_ATENDIDO"
}
```

○ Response:

- HTTP Status Code 200 (OK) em caso de sucesso, constando no corpo da
resposta os dados atualizados do paciente.
Exemplo: /api/pacientes/1/status

```bash
{
	"id": 1,
	"nome_completo": "Eunice Kathleen Waymon",
	"genero": "F",
	"data_de_nascimento": "1933-02-21",
	"cpf": "03184611931",
	"telefone": "388232366",
	"contato_de_emergencia": "32665163",
	"lista_de_alergias": "pelo de capivara",
	"lista_de_cuidados_especificos": "não ficar com o pé molhado",
	"convenio": "Jazz",
	"status_de_atendimento": "NAO_ATENDIDO",
	"total_de_atendimentos": 0,
	"createdAt": "2023-04-21T19:29:26.276Z",
	"updatedAt": "2023-04-21T21:44:47.603Z"
}
```



- HTTP Status Code 400 (Bad Request) em caso de requisição com dados
inválidos, informando mensagem de erro explicativa no corpo do
response.
Exemplo: no corpo da requisição colocamos a palavra "AENDIMENTO" que não faz parte dos
valores pré estabelecidos.

```bash
{
	"message": "O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO"
}
```

- HTTP Status Code 404 (Not Found) em caso de não ser encontrado
registro com o código informado, retornando mensagem de erro
explicativa no corpo do response.
Exemplo: /api/pacientes/9/status
Colocamos um id inesistente.

```bash
{
	"message": "Paciente não encontrado"
}
```






















