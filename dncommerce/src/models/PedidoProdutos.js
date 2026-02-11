const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

const PedidoProduto = sequelize.define('PedidoProduto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produto_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'pedido_produtos',
  timestamps: false
});

module.exports = PedidoProduto;
