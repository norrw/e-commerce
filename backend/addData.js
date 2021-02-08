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

const addData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Review.deleteMany();

    const newUsers = await User.insertMany(users);

    const admin = newUsers[0]._id;

    const newProducts = products.map((item) => {
      return { ...item, user: admin };
    });

    await Product.insertMany(newProducts);
    console.log('Data has been imported');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

addData();
