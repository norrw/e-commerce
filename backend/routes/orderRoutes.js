const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderItem,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require('../controllers/orderController');
const { protectRoute, isAdmin } = require('../middleware/middleware');

router
  .route('/')
  .post(protectRoute, addOrderItems)
  .get(protectRoute, isAdmin, getOrders);
router.route('/myorders').get(protectRoute, getMyOrders);
router.route('/:id').get(protectRoute, getOrderItem);
router.route('/:id/pay').put(protectRoute, updateOrderToPaid);
router.route('/:id/deliver').put(protectRoute, isAdmin, updateOrderToDelivered);

module.exports = router;
