const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o app 
const app = express();

app.use(express.json());
app.use(cors()); // os argumentos permitem selecionar os dominios que vão ter acesso.
// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',  
  { useNewUrlParser: true, useUnifiedTopology: true } 
);
// require('./src/models/Product') usado para buscar o schema na models
requireDir('./src/models'); // lib que faz a busca de schemas automaticamente se passar o caminho da pasta

// //Ter acesso ao schema
// const Product = mongoose.model('Product');

// Rotas
app.use('/api', require("./src/routes"))

app.listen(3001);

