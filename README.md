# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


primeiramente abra o docker desktop, após iniciar voce deve abrir o prompt de comando e inserir o script 
docker run --name postgres -e POSTGRES_PASSWORD=12345678 -p 5445:5432 -d postgres
					banco						senha		 porta         versão 
obs.: caso não passe nada na versão, além do "postgres", exemplo: postgres:11 ou postgres:13, ele ira pegar a ultima versão do disponivel.

inserir no banco este script: CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

feito isso, é só criar o database dentro do client de sua preferencia (eu utilizo o dbeaver), a parte de banco estara ok.

baixar o projeto do github ou o zip que disponibilizei.

segue o modelo de criação das migrations:

1 - Criação
yarn typeorm migration:create -n nomeDaMigration

obs.: após rodar o script acima, notará que ele segue um padrão como no exemplo: 1643745718028-nomeDaMigration.ts

2 - script UP
no modelo gerado pelo script de criação, em "up" voce deve passar:
queryRunner.createTable( new Table({ name: "", columns: [{name: "", type: ""}] )

3 - script DOWN
queryRunner.dropTable("");

4 - Rodar Script
yarn typeorm migration:run 

5 - criar o model, service, controller..

6 - Alter
no modelo gerado pelo script de alteração de uma tabela ja existente, em "up" voce deve passar:
queryRunner.createColumn( "nomeDaTabela", new TableColumn({ name: "", type: "", default: "" }) )  -  default no caso de not null deverá ser passado.