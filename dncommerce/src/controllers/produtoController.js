const Produto = require('../models/Produto');

exports.criarProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
