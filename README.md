<h1 align="center">Módulo 1 🎓 Projeto Avaliativo </h1>
<p align="center">Curso Lab365 - SESI SENAI - Projeto Floripa Mais Tec<p/>

![banner projeto avaliativo modulo1 (1)](https://user-images.githubusercontent.com/71991444/231337627-9487bd4a-a105-4027-b312-32d4c29490f6.jpg)

# Índice 

* [Resumo](#resumo)
* [Introdução](#introdução)
* [Tecnologias utilizadas](Organização-das-pastas-desse-repositório)
* [Vídeo de Apresentação](Em-andamento)
* [Status](Em-andamento)
* [Documentação do Projeto](Em-andamento)

# Resumo

Repositório criado para entrega do Projeto avaliativo do curso...


### Documentação do Projeto

<p>FullStack [Trindade]
 

 <details>
    <summary>Sumário</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td> Introdução</td>
        </tr>
        <tr>
          <td> Entrega</td>
        <tr>
          <td> Requisitos da Aplicação</td>
        </tr>
      </tbody>
    </table>
  </details>
  <details>
    <summary>1 Introdução</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td>A 365 Medical Inc, empresa líder no segmento tecnológico para gestão hospitalar, está tomando algumas ações para testar e automatizar determinados processos nos atendimentos de pacientes em âmbito hospitalar. O seu perfil chamou a atenção dos gestores, para criar o Produto Viável Mínimo (Inglês: MVP) da API Rest, que deverá ser construída utilizando JavaScript, ExpressJS e PostgreSQL.
</td>
        </tr>
    </tbody>
    </table>
  </details>
  <details>
    <summary>2 Entrega</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td>O código deverá ser inserido e versionado no GitHub em modo privado, e o vídeo deverá ser inserido no Google Drive em modo leitor para qualquer pessoa com o link. Ambos os links deverão ser disponibilizados na tarefa Módulo 1 - Projeto Avaliativo, presente na semana 11 do AVA até o dia 23/04/2023 às 23h55.</td>
        </tr>
        <tr>
        <td>O repositório privado deverá ter as seguintes pessoas adicionadas:<br>
Henrique Douglas Cavalcante - douglas-cavalcante<br>
Operação DEVinHouse - devinhouse-operacao</td>
</tr>
        <tr>
        <td>Importante:<br>
Não serão aceitos projetos submetidos após a data limite da atividade, e, ou alterados depois de entregues. Lembre-se de não modificar o código no GitHub até receber sua nota e feedback.<br>
Não esqueça de submeter os links no AVA. Não serão aceitos projetos em que os links não tenham sido submetidos.
</td>
        </tr>
    </tbody>
    </table>
  </details>
  <details>
    <summary>3 Requisitos da Aplicação</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td>A aplicação que deverá ser realizada individualmente deve contemplar os seguintes requisitos:<br>
- Ser uma API Rest desenvolvida em JavaScript com uso do ExpressJS;<br>
- Utilizar o banco de dados PostgreSQL;<br>
- Ser versionado no GitHub, possuindo uma documentação readme.md sobre o projeto e como utilizar;<br>
- Possuir um vídeo explicativo sobre o projeto.<br>
- Seguir o Roteiro da Aplicação;</td>
        </tr>
    </tbody>
    </table>
  </details>
  <details>
    <summary>4 Roteiro da Aplicação</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td>A LABMedicine, deseja automatizar algumas ações de atendimento, criando um sistema para armazenamento de informações referente aos pacientes, enfermeiros e médicos.
</td>
        </tr>
        <tr>
          <td>4.1 FORMATO DO SISTEMA<br>
O sistema deve conter os tipos de cadastros abaixo, cada um com suas características.<br>
Carregamento de Dados Iniciais<br>
Deve ser utilizado como Sistema Gerenciador de Banco de Dados o PostgreSQL, e a aplicação deve usar como nome do banco de dados labmedicinebd.
</td>
        </tr>
        <tr>
        <td>S01 - Cadastro de Paciente<br>
Serviço de cadastro de Paciente, cuja deve possuir os seguintes atributos:<br>
Identificador: Um número que deve ser incrementado automaticamente<br>
Nome Completo: Deve ser um texto<br>
Gênero: Deve ser um texto<br>
Data de Nascimento: Obrigatório, data válida.<br>
CPF: Deve ser texto<br>
Telefone: Deve ser texto<br>
Contato de Emergência: Obrigatório, Deve ser texto<br>
Lista de Alergias: Não obrigatório para a criação da classe<br>
Lista de Cuidados Específicos: Não obrigatório para a criação da classe<br>
Convênio: Não obrigatório para a criação da classe<br>
Status de Atendimento: Um paciente pode estar com as seguintes situações:<br>
Aguardando Atendimento<br>
Em Atendimento<br>
Atendido<br>
Não Atendido<br>
Total de atendimentos realizados.<br>
Este item é um contador que inicia em zero. Sempre que um médico realiza um atendimento este valor deve ser incrementado.<br>
<br>
Definição do Endpoint:<br>
Request:<br>
HTTP POST no path /api/pacientes<br>
No corpo da request, informar objeto json com os campos<br>
Todos os campos obrigatórios devem ser validados. O CPF deve ser único por paciente. Validar se o CPF informado já foi cadastrado no sistema.<br>
Response:<br>
HTTP Status Code 201 (CREATED) em caso de sucesso, constando no corpo da resposta o código atribuído ao novo paciente cadastrado, além dos demais campos. No response, retornar os campos adicionais “identificador” e “atendimentos”, usando obrigatoriamente estes nomes para os campos.<br>
HTTP Status Code 400 (Bad Request) em caso de requisição com dados inválidos, informando mensagem de erro explicativa no corpo do response. <br>
HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado, informando mensagem de erro explicativa no corpo do response.</dt>
        </tr>
    </tbody>
    </table>
  </details>
  <details>
    <summary>Introdução</summary>
    <table>
      <thead>
      </thead>
      <corpo>
        <tr>
          <td>Texto</td>
        </tr>
    </tbody>
    </table>
  </details>

 
 
 

