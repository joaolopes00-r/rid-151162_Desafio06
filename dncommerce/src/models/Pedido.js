const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: 'pedidos',
  timestamps: false
});

module.exports = Pedido;
