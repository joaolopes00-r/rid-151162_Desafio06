const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');
const PedidoProduto = require('../models/PedidoProdutos');
const Estoque = require('../models/estoque');

const { sequelize } = require("../database/mysql");


exports.criarPedido = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { cliente_id, produtos } = req.body;

    if (!produtos || produtos.length === 0)
      return res.status(400).json({ erro: "Pedido precisa ter produtos" });

    const pedido = await Pedido.create({ cliente_id }, { transaction: t });

    let total = 0;

    for (const item of produtos) {

      const produto = await Produto.findById(item.produto_id);

      if (!produto)
        return res.status(404).json({ erro: "Produto não encontrado" });

      const estoque = await Estoque.findOne({
        where: { produto_id: item.produto_id }
      });

      if (!estoque || estoque.quantidade < item.quantidade)
        return res.status(409).json({ erro: "Estoque insuficiente" });

      await PedidoProduto.create({
        pedido_id: pedido.id,
        produto_id: item.produto_id,
        quantidade: item.quantidade,
        
      }, { transaction: t });

      estoque.quantidade -= item.quantidade;
      await estoque.save({ transaction: t });

      total += produto.preco * item.quantidade;
    }

    pedido.total = total;
    await pedido.save({ transaction: t });

    await t.commit();

    return res.status(201).json(pedido);

  } catch (err) {
    await t.rollback();
    return res.status(500).json({ erro: "Erro interno ao criar pedido" });
  }
};
exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    return res.json(pedidos);
  } catch (err) {
    return res.status(500).json({ erro: "Erro ao listar pedidos" });
  }
};

exports.buscarPedido = async (req, res) => {
  try {
    const { id } = req.params;

    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      await t.rollback();
      return res.status(404).json({ erro: "Produto não encontrado" });

    }

    return res.json(pedido);
  } catch (err) {
    return res.status(500).json({ erro: "Erro ao buscar pedido" });
  }
};

