const express = require('express'); //retorna uma função
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
//envio de info no formato json
app.use(express.json());
//rota publica
app.use(cors());

//iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes.ts'));

app.listen(3001); //escutar - http://localhost:3001/