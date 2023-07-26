const Sequelize = require('sequelize');

const sequelize = new Sequelize('Node Complete', 'root', 'abc763024', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
