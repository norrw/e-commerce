const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

module.exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

module.exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Sorry, no product found');
  }
});
