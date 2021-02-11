const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
dotenv.config();
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  const error = new Error(`${req.originalUrl} not found`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: err.message });
});

app.get('/', (req, res) => {
  res.send('Home page');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
