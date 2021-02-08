const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Polly',
    email: 'polly@gmail.com',
    password: bcrypt.hashSync('polly123', 10),
  },
  {
    name: 'Pippa',
    email: 'pippa@gmail.com',
    password: bcrypt.hashSync('pippa123', 10),
  },
];

module.exports = users;
