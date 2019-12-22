const mongoose = require('mongoose');
// lib que faz paginação de registros mostra total, pagina atual, limite a ser mostrado etc.
const mongoosePaginate = require('mongoose-paginate'); 

const ProductSchma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

ProductSchma.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchma);