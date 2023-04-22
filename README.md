<h1 align="center">Módulo 1 🎓 Projeto Avaliativo </h1>
<p align="center">Curso Lab365 - SESI SENAI - Projeto Floripa Mais Tec<p/>

![banner git - projeto avaliativo modulo1](https://user-images.githubusercontent.com/71991444/233677516-d8b2d792-157b-49d5-b230-14ea4600c301.jpg)

<p align="center">MEDIFACIL Software foi criado para automatizar determinados processos de gerenciamento em âmbito hospitalar. Esse Produto Viável Mínimo (Inglês: MVP) da API Rest, foi
construída utilizando JavaScript, ExpressJS e PostgreSQL.</p>

# Índice 

* [Roteiro da aplicação](#roteiro-da-aplicação)
* [Carregamento de dados iniciais](#carregamento-de-dados-iniciais)
* [Pré-Requisitos](#pré-Requisitos)
* [Dependências](#dependências)
* [Técnicas e padrões utilizadas](#técnicas-e-padrões-utilizadas)
* [Instalação](#instalação)
* [Endpoints](#endpoints-Rotas)
* [Melhorias](#melhorias-a-serem-aplicadas)
* [Organização](#organização-para-o-desenvolvimento-do-projeto)
* [Aprendizado](#aprendizado)
* [Autor](#autor)
* [Logo](#logo)

# Roteiro da aplicação

Automatiza algumas ações de atendimento, criando um sistema para
armazenamento de informações referente aos pacientes, enfermeiros e médicos.

# Carregamento de dados iniciais

Deve ser utilizado como Sistema Gerenciador de Banco de Dados o PostgreSQL, e a
aplicação deve usar como nome do banco de dados labmedicinebd.

# Pré-Requisitos

Para trabalhar com essa aplicação você vai precisar:

* Um ambiente Node.js > v160.0

# Dependências

| Dependência | Versão | Uso |
| ------ | ------ | ------ |
| Sequelize | ^6.31.0 | Gerenciamento de modelos e bancos de dados em Node.js. |
| dotenv | ^16.0.3 | Permite o uso de variáveis de ambiente na sua aplicação. |
| express | ^4.18.2 | Oferece um conjunto de ferramentas para gerenciamento de rotas, middlewares, parâmetros de requisição e resposta, entre outros recursos. |
| nodemon | ^2.0.22 | Permite reiniciar automaticamente sua aplicação Node.js sempre que houver alterações no código fonte. |
| pg | ^8.10.0 | fornece um driver de banco de dados PostgreSQL para o Node.js. |
| pg-hstore | ^2.3.4 | Converte objetos JavaScript em formato JSON para uma representação em string do tipo hstore, que pode ser armazenada em campos do tipo hstore do banco de dados PostgreSQL. |
| yup | ^1.0.2 |  oferece um conjunto de ferramentas para validação de dados em JavaScript. |

# Técnicas e padrões utilizadas

O projeto foi dividido em uma estrutura de hierarquia de pastas, de forma padronizada para melhor organização. Levando em consideração que uma boa organização
é fundamental para a facilidade de navegação, escalabilidade já que, acreditando que o projeto possa vir a crescer de forma mais estruturada e gerenciável,
facilita a manutenção, evolução e adição de novas funcionalidades.
A boa organização também contriu para o reaproveitamento de código, testabilidade e manutenção. Por isso sugero que, caso opte por clonar e queira prosseguir
com esse projeto, dê continuidade ao padrão já estabelecido.

![image](https://user-images.githubusercontent.com/71991444/233700733-6c059aaf-31e4-4739-801b-154c70bb4a01.png)

| Caminho | Contém | Vai encontrar | 
| ------ | ------ | ------|
| **/src/controllers** | Controladores da API, responsáveis por receber as requisições dos clientes e responder com as informações solicitadas. | Os arquivos que definem as rotas da API, as funções que processam as requisições e as respostas, e todas as validações necessárias para garantir a integridade e segurança dos dados. | 
| **/src/database** | Os arquivos e configurações relacionados ao banco de dados utilizado pela sua API. | Os scripts SQL, as definições de tabelas e índices, as conexões de banco de dados, entre outros. | 
| **/src/models** | Os modelos ou esquemas de dados da sua API, que definem como as informações serão armazenadas e organizadas no banco de dados. | Os arquivos que descrevem as tabelas, campos, relacionamentos e validações dos dados. |

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
* **HTTP Status Code 201 (CREATED)** em caso de sucesso, constando no
corpo da resposta o código atribuído ao novo paciente cadastrado, além
dos demais campos. No response, retornar os campos adicionais
“identificador” e “atendimentos”, usando obrigatoriamente estes nomes
para os campos.
Exemplo:

![image](https://user-images.githubusercontent.com/71991444/233750100-5748c929-041f-44e0-8b72-747326c695d2.png)

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

* **HTTP Status Code 400 (Bad Request)** em caso de requisição
com dados inválidos, informando mensagem de erro explicativa
no corpo do response.
Exemplo:

![image](https://user-images.githubusercontent.com/71991444/233750869-945645ce-e166-4d2b-962a-5078625bd6c8.png)

```bash
 {
	"message": "Preencha todos os campos obrigatórios."
}
```

* **HTTP Status Code 409 (Conflict)** em caso de CPF já cadastrado,
informando mensagem de erro explicativa no corpo do response.
Exemplo:

![image](https://user-images.githubusercontent.com/71991444/233751052-f1ec012e-3d9f-4ffa-9276-42290212dacd.png)

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
- **HTTP Status Code 200 (OK)** em caso de sucesso, constando no corpo da
resposta os dados atualizados do paciente. 
Exemplo: nesse caso, mudamos o nome artistico de Nina Simone, pelo nome de batismo Eunice Kathleen Waymon.

![image](https://user-images.githubusercontent.com/71991444/233750576-c20d07d5-df35-409b-b317-16b96101f2d8.png)

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


- **HTTP Status Code 400 (Bad Request)** em caso de requisição com dados
inválidos, informando mensagem de erro explicativa no corpo do
response.
Exemplo: 

![image](https://user-images.githubusercontent.com/71991444/233750887-a1fcf4c7-c7d7-4b1c-bcc4-7bd2a2066665.png)

```bash
{
	"message": "Não foi possivel processar sua solicitação."
}
```

- **HTTP Status Code 404 (Not Found)** em caso de não ser encontrado
registro com o código informado, retornando mensagem de erro
explicativa no corpo do response.
Exemplo:/api/pacientes/15
colocamos um id inesistente.

![image](https://user-images.githubusercontent.com/71991444/233749959-2c842bd2-0e5c-42a1-a325-c3fa02e26e9b.png)

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

- **HTTP Status Code 200 (OK)** em caso de sucesso, constando no corpo da
resposta os dados atualizados do paciente.
Exemplo: /api/pacientes/1/status

![image](https://user-images.githubusercontent.com/71991444/233750591-33f686ff-2b2a-405e-b833-9a587364f1f9.png)

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



- **HTTP Status Code 400 (Bad Request)** em caso de requisição com dados
inválidos, informando mensagem de erro explicativa no corpo do
response.
Exemplo: no corpo da requisição colocamos a palavra "AENDIMENTO" que não faz parte dos
valores pré estabelecidos.

![image](https://user-images.githubusercontent.com/71991444/233750907-488d1502-2ff3-4269-bf15-ed8ee209ed3f.png)

```bash
{
	"message": "O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO"
}
```

- **HTTP Status Code 404 (Not Found)** em caso de não ser encontrado
registro com o código informado, retornando mensagem de erro
explicativa no corpo do response.
Exemplo: /api/pacientes/9/status
Colocamos um id inesistente.

![image](https://user-images.githubusercontent.com/71991444/233749970-d448a278-a68d-4c8b-a664-43ed8d0626ea.png)

```bash
{
	"message": "Paciente não encontrado"
}
```

## Listagem de Pacientes

Serviço de listagem de pacientes cadastrados.

Request:

- **HTTP GET no path /api/pacientes**
- Não é necessário request body
- Deve prever um query param opcional para filtrar o resultado da
consulta pelo status de atendimento.
- query param = “status” (não obrigatório ser informado na
request)
- Valores possíveis para serem informados na requisição =
**AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO e
NAO_ATENDIDO**
- Exemplo de path com o query param informado:
/api/pacientes?status=ATENDIDO
- Caso não seja informado o parâmetro de pesquisa, deve retornar todos
os registros da base de dados.
○ Response:
- **HTTP Status Code 200 (OK)**, com a lista de pacientes.

![image](https://user-images.githubusercontent.com/71991444/233750167-db936ce4-4f1d-45eb-9ce3-bb17358238a3.png)


## Listagem de Paciente pelo identificador

Serviço de consulta de paciente pelo seu código identificador.

Request:
- **HTTP GET no path /api/pacientes/{identificador}**
- Não é necessário request body.
Exemplo: /api/pacientes/1

Response:
- **HTTP Status Code 200 (OK)**, com os dados do paciente.
Exemplo:

![image](https://user-images.githubusercontent.com/71991444/233750753-6e7554b1-5591-4ab7-b641-09322cd155f1.png)


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

- **HTTP Status Code 404 (Not Found)** em caso de não ser encontrado
registro com o código informado, retornando mensagem de erro
explicativa no corpo do response.
Exemplo:/api/pacientes/10
O id nesse caso é inessistente 

![image](https://user-images.githubusercontent.com/71991444/233749895-cfba6345-b7e0-40d7-b662-b4be80246ce7.png)

```bash
{
	"message": "Paciente não encontrado"
}
```

## Exclusão de Paciente

Serviço para excluir um paciente pelo código identificador.

Request:

- **HTTP DELETE no path /api/pacientes/{identificador}**
- Não é necessário request body.
Exemplo: 

Response:

- **HTTP Status Code 204 (No Content)** em caso de sucesso, sem
necessidade de response body.

![image](https://user-images.githubusercontent.com/71991444/233751425-64619a54-d395-4ff0-a9cc-5667fc8255b5.png)

- **HTTP Status Code 404 (Not Found)** em caso de requisição com código
não existente na base de dados.

![image](https://user-images.githubusercontent.com/71991444/233749895-cfba6345-b7e0-40d7-b662-b4be80246ce7.png)

```bash
{
	"message": "Paciente não encontrado"
}
```

# Melhorias a serem aplicadas

As melhorias que podem ser aplicadas são muitas, mas gostaria de destacar:

* Incorporar autenticação com login e senha para acesso ao sistema.
* Novas tabelas referente a agendamento de consultas,retornos e exames.
* Tabela referente a check-list dos enfermeiros. (Troca de curativo, aplicação de medicação, verificação de pressão...)
* Automação para confirmação das consultas agendadas.
* Lembrete via e-mail, com os dados da consulta agendada.
* Pesquisa por data de atentimento.

# Organização para o desenvolvimento do projeto

Escolhi usar o TRELLO, mesma ferramenta usada no curso. Dividir o projeto em pequenas partes facilitou bastante na organização e no comprimento dos prazos que estabeleci.

Exemplo do quadro na primeira semana:
![image](https://user-images.githubusercontent.com/71991444/233754634-a7a715f6-bb36-4845-9e45-dba45419a280.png)

# Aprendizado

Com o desenvolviento desse projeto pude experimentar as "dores e delicias" de fazer uma aplicação do começo ao fim. Tive a oportunidade de fortalecer conceitos de programação, a raiva e satisfação de resolver os bugs (que eu mesmo criei por erro de lógica), vivenciei o desespero inicial de achar que não conseguiria concluir o projeto a tempo e a alegria de ver o resultado de cada teste rodando como o esperado. Quero aproveitar para registrar que "na minha máquina está tudo funcionando" rsrsrsrs Obrigada ao Prof Douglas Cavalcante pela paciência e forma generosa de ensinar.
Como pontos importantes de aprendizado, destaco ainda:

- Programação Orientada a Objetos: Conceitos de POO, Classes, Objetos.
- Versionamento: Uso do GitHub para versionamento de código.
- JavaScript: Variáveis, Tipos de dados, Operadores, Arrays, Estrutura de Controle de Fluxo, Objetos, JSON, Funções, Arrow Functions, LocalStorage, Interval, Timeout,
Operadores Rest e Spread, Módulos, Funções de Arrays e Funções Assíncronas.
- ExpressJS: Ambiente, Estrutura de projeto, API Rest, CRUD, Integração com banco de
dados e Uso do Framework.
- Banco de Dados: Modelo Relacional e SQL com PostgreSQL.
- Skills: Organização, criação de documentação, apresentação de solução e a pedir ajuda quando necessário.


# Autor

Esse projeto foi desenvolvido por: **Deise F A S.**

Mentor: **Douglas Cavalcante**

# Logo

Para esse projeto, criei uma logo com base no nome que escolhi para a aplicação, Medifacil.

![image](https://user-images.githubusercontent.com/71991444/233752889-b80bec58-5410-4238-9e2d-dbfcd1f30a47.png)







https://user-images.githubusercontent.com/71991444/233794231-50941561-8d58-45a9-a546-f4193ddddd7c.mp4














