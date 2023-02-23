## Projeto Store Manager!

## Contexto do projeto:
Neste projeto foi desenvolvido uma API utilizando a arquitetura MSC (model-service-controller)!
A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas. Foi utilizado o banco de dados MySQL para a gestão de dados.

## Instalação Local:
Para rodar a aplicação em sua maquina.

1. Clone o repositorio. Use o comando:</br>
  <code>git clone git@github.com:carolhn/Talker-manager.git</code></br>
  
2. Entre na pasta do repositório que você acabou de clonar:</br>
<code>cd Talker-manager</code>

3. Instale as dependências</br>
<code>npm install</code>

4. Comando para executar o app</br>
<code>npm start</code>



## Instalação com Docker:
1. Rode o serviço `node` e `db` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

2. Use o comando `docker exec -it store_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

3. Instale as dependências [**Caso existam**] com `npm install`

4. Execute a aplicação com `npm start` ou `npm run dev`

