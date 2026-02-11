const Cliente = require('./Cliente');
const Pedido = require('./Pedido');
const Venda = require('./Venda');

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Pedido.hasOne(Venda, { foreignKey: 'pedido_id' });
Venda.belongsTo(Pedido, { foreignKey: 'pedido_id' });

module.exports = {
  Cliente,
  Pedido,
  Venda
};
