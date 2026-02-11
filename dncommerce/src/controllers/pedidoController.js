const Pedido = require('../models/Pedido');
const Venda = require('../models/Venda');

exports.criarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({ include: Venda });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
