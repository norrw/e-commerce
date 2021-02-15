const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderItem,
} = require('../controllers/orderController');
const { protectRoute } = require('../middleware/middleware');

router.route('/').post(protectRoute, addOrderItems);
router.route('/:id').get(protectRoute, getOrderItem);

module.exports = router;
