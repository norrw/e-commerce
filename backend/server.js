const express = require('express');
const app = express();
const products = require('./products');

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Listening on ${PORT}`);
});
