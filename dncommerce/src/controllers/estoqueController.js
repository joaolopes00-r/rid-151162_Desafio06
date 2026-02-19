const Estoque = require("../models/estoque");

exports.listar = async (req, res) => {
  try {
    const estoque = await Estoque.findAll();
    return res.status(200).json(estoque);
  } catch (err) {
    return res.status(500).json({ erro: "Erro ao listar estoque" });
  }
};

exports.criar = async (req, res) => {
  try {
    const { produto_id, quantidade } = req.body;

    if (!produto_id || quantidade == null) {
      return res.status(400).json({
        erro: "produto_id e quantidade são obrigatórios"
      });
    }

    if (quantidade < 0) {
      return res.status(400).json({
        erro: "Quantidade não pode ser negativa"
      });
    }
    const existente = await Estoque.findOne({
  where: { produto_id }
});

  if (existente) {
    return res.status(409).json({
    erro: "Estoque já existe para esse produto"
  });
}


    const item = await Estoque.create({ produto_id, quantidade });

    return res.status(201).json(item);

  } catch (err) {
    console.error(err);
    return res.status(400).json({
      erro: err.message
    });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { produtoId } = req.params;
    const { quantidade } = req.body;

    if (quantidade < 0) {
      return res.status(400).json({ erro: "Quantidade inválida" });
    }

    const item = await Estoque.findOne({
      where: { produto_id: produtoId }
    });

    if (!item) {
      return res.status(404).json({
        erro: "Produto não encontrado no estoque"
      });
    }

    item.quantidade = quantidade;
    await item.save();

    return res.status(200).json(item);

  } catch (err) {
    return res.status(500).json({
      erro: "Erro ao atualizar estoque"
    });
  }
};
