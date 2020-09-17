# nodejsApiRest

Esse projeto é uma API REST em JavaScript para o cadastramento de produtos contendo (título, descrição, url e data de criação) em um banco de dados, não relacional, MongoDB instalado em um container Docker.
 - Conhecimentos: 
    - Requisições HTTP
 	- NodeJs
 	- MongoDB
    - Docker

## Instalação do MongoDB no Docker
Documentação: https://docs.docker.com/get-docker/

```
sudo apt install docker.io
docker --version

sudo docker pull mongo
sudo docker run --name mongodb -p 27017:27017 -d mongo

sudo docker ps -a
```
### Execução do MongoDB:
```
sudo docker start mongodb 
sudo docker kill mongodb
```

## Execução da API:
```
npm start
```
## Dependências:

* ### Expres: 

Micro framework para lidar com rotas e views: 
```
npm install express
```
* ### Mongosse: 
Um ORM (Object Relational Maping) encapsula a logica dos bancos não relacionais em codigo javascript:
```
npm install mongoose
```
* ### Paginação:
```
npm install mongoose-paginate
Ex rota: http://localhost:3001/api/products?page=1
```
* ### CORS (Cross-origin resource sharing):
Previne que outros dominios acessem a API criada
```
npm install cors
```

## Dependências do desenvolvedor:

* ### Nodemon: 
Faz a reinicialização do servidor toda vez que houver alterações no código
```
npm install -D nodemon
```

* ### Require: 
Faz a reinicialização em todos os arquivos do diretorio apontado
```
npm install require-dir
```








