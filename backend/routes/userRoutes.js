const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController');
const { protectRoute } = require('../middleware/middleware');

router.route('/').post(registerUser);
router.post('/login', authenticateUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

module.exports = router;
