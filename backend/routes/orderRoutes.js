const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderItem,
  updateOrderToPaid,
  getMyOrders,
} = require('../controllers/orderController');
const { protectRoute } = require('../middleware/middleware');

router.route('/').post(protectRoute, addOrderItems);
router.route('/myorders').get(protectRoute, getMyOrders);
router.route('/:id').get(protectRoute, getOrderItem);
router.route('/:id/pay').put(protectRoute, updateOrderToPaid);

module.exports = router;
