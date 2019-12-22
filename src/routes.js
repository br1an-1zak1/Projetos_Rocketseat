const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
// primeira rota
//get, rota para trazer registro 
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
//post, rota para inseris registro novo
routes.post('/products', ProductController.store);
// put, rota para alteração
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;