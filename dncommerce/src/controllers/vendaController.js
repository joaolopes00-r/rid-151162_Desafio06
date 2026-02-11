const Venda = require('../models/Venda');

exports.criarVenda = async (req, res) => {
  try {
    const venda = await Venda.create(req.body);
    return res.status(201).json(venda);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.listarVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    return res.json(vendas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deletarVenda = async (req, res) => {
  try {
    await Venda.destroy({ where: { id: req.params.id } });
    return res.json({ message: "Venda deletada" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
