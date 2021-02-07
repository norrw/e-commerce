const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
dotenv.config();
const app = express();
const products = require('./products');

connectDB();

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

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
