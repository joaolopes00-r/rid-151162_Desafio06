const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

const Estoque = sequelize.define('Estoque', {
 produto_id: {
  type: DataTypes.STRING(100),
  allowNull: false
},

  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'estoques',
  timestamps: false
});

module.exports = Estoque;
