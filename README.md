<h1 align="center">
<br>
Desafio Back-end LinkApi
</h1>

<p align="center"> Aplicação que integra dados entre o CRM
    <a aria-label="pipedrive" href="https://www.pipedrive.com/pt">
    pipedrive
  </a>
  e o ERP
    <a aria-label="bling" href="https://www.bling.com.br/home">
    bling
  </a>

##
## Requisitos
● Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

● Criar banco de dados mongo.

● Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

● Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Principais tecnologias utilizadas

- linguagem:
  - NodeJS com Typescript.

- Backend:
  - Framework: Express.
  - Banco: MongoDB
  - ORM: Mongoose.
  - Padronização de código: Eslint e Prettier.
  - Infra
  - Docker e docker compose.

## Projeto

Este desafio foi desenvolvido com o intuído de mostrar minhas habilidades nas tecnologias citadas a cima.


## Instalação - Projeto

##### Requisitos:

Clone o projeto em seu computador.
```bash
git clone https://github.com/IBatistaSantos/linkApi-desafio.git
```


- Ter instalado <a aria-label="docker" href="https://docs.docker.com/engine/install/">
    docker
  </a> e
  <a aria-label="docker compose" href="https://docs.docker.com/compose/install/">
    docker compose.
  </a>

- Rodar o docker compose do projeto, isso irá rodar os bancos de dados
- 
```bash
yarn up
```

