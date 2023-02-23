const express = require('express');
const productController = require('./controllers/product.controller');
const salesController = require('./controllers/sales.controller');
const validateName = require('./middlewares/validateName');
const validadeProductId = require('./middlewares/validateProductId');
const validateQuanty = require('./middlewares/validateQuantity');

const app = express();
app.use(express.json());

// rota do meu endpoint
app.get('/products', productController.findAll);
app.get('/products/:id', productController.findById);
app.post('/products', validateName, productController.insert);
app.delete('/products/:id', productController.deleteProduct);

app.post('/sales', validadeProductId, validateQuanty, salesController.createSales);
app.get('/sales', salesController.findAll);
app.get('/sales/:id', salesController.findById);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
