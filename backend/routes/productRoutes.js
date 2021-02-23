const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} = require('../controllers/productController');
const { protectRoute, isAdmin } = require('../middleware/middleware');

router.route('/').get(getProducts).post(protectRoute, isAdmin, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protectRoute, isAdmin, deleteProduct)
  .put(protectRoute, isAdmin, updateProduct);

module.exports = router;
