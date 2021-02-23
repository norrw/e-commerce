const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require('../controllers/userController');
const { protectRoute, isAdmin } = require('../middleware/middleware');

router.route('/').post(registerUser).get(protectRoute, isAdmin, getUsers);
router.post('/login', authenticateUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);
router
  .route('/:id')
  .delete(protectRoute, isAdmin, deleteUser)
  .get(protectRoute, isAdmin, getUser)
  .put(protectRoute, isAdmin, updateUser);

module.exports = router;
