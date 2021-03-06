const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

module.exports.authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Password Or Email Is Incorrect');
  }
});

module.exports.registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User has already been registered');
  } else {
    const user = await User.create({ name, email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  }
});

module.exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('Sorry, user not found');
  }
});

module.exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedProfile = await user.save();

    res.json({
      _id: updatedProfile._id,
      name: updatedProfile.name,
      email: updatedProfile.email,
      isAdmin: updatedProfile.isAdmin,
      token: generateToken(updatedProfile._id),
    });
  } else {
    res.status(404);
    throw new Error('Sorry, user not found');
  }
});

module.exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: 'User successfully deleted' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('Sorry, user not found');
  }
});

module.exports.updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;
    const updatedProfile = await user.save();

    res.json({
      _id: updatedProfile._id,
      name: updatedProfile.name,
      email: updatedProfile.email,
      isAdmin: updatedProfile.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('Sorry, user not found');
  }
});
