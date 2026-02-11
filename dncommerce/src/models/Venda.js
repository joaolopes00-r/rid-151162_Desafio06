const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

const Venda = sequelize.define('Venda', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  valor_total: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  forma_pagamento: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: 'vendas',
  timestamps: false
});

module.exports = Venda;
