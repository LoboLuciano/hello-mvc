// controllers/index.js
const User = require('../models/User');

exports.home = (req, res) => {
  res.send('Implementar');
};

exports.search = (req, res) => {
  res.send('Implementar')
}

// controllers/index.js
exports.home = (req, res) => {
  res.render('index');
};