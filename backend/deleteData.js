const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./users');
const products = require('./products');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Review = require('./models/Review');
const connectDB = require('./db');

dotenv.config();

connectDB();

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Review.deleteMany();

    console.log('Data has been deleted');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

deleteData();
