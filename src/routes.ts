const express = require('express'); //retorna uma função
const routes = express.Router();

const productController = require('./controllers/productController.js');

routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

module.exports = routes;