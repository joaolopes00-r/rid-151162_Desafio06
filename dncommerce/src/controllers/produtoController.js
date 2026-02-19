// src/controllers/produtoController.js
const Produto = require("../models/Produto");

// GET /produtos
exports.listar = async (req, res) => {
  try {
    const produtos = await Produto.find().sort({ criadoEm: -1 });
    return res.status(200).json(produtos);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: "Erro ao listar produtos" });
  }
};

// POST /produtos
exports.criar = async (req, res) => {
  try {
    const { nome, preco, descricao, categoria } = req.body;

    if (!nome || preco == null) {
      return res.status(400).json({ erro: "nome e preco são obrigatórios" });
    }

    // garante que preco é número
    const precoNum = Number(preco);
    if (Number.isNaN(precoNum) || precoNum < 0) {
      return res.status(400).json({ erro: "preco inválido" });
    }

    const produto = await Produto.create({
      nome,
      preco: precoNum,
      descricao,
      categoria
    });

    return res.status(201).json(produto);
  } catch (err) {
    console.error(err);

    // erro de validação do mongoose
    if (err.name === "ValidationError") {
      return res.status(400).json({ erro: err.message });
    }

    return res.status(500).json({ erro: "Erro ao criar produto" });
  }
};

// GET /produtos/:id
exports.buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const produto = await Produto.findById(id);

    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    return res.status(200).json(produto);
  } catch (err) {
    console.error(err);

    // id inválido (ObjectId mal formatado)
    if (err.name === "CastError") {
      return res.status(400).json({ erro: "ID inválido" });
    }

    return res.status(500).json({ erro: "Erro ao buscar produto" });
  }
};

// PUT /produtos/:id
exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;

    const update = { ...req.body };

    if ("preco" in update) {
      const precoNum = Number(update.preco);
      if (Number.isNaN(precoNum) || precoNum < 0) {
        return res.status(400).json({ erro: "preco inválido" });
      }
      update.preco = precoNum;
    }

    const produto = await Produto.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true
    });

    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    return res.status(200).json(produto);
  } catch (err) {
    console.error(err);

    if (err.name === "CastError") {
      return res.status(400).json({ erro: "ID inválido" });
    }

    if (err.name === "ValidationError") {
      return res.status(400).json({ erro: err.message });
    }

    return res.status(500).json({ erro: "Erro ao atualizar produto" });
  }
};

// DELETE /produtos/:id
exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;

    const produto = await Produto.findByIdAndDelete(id);

    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    return res.status(200).json({ mensagem: "Produto deletado com sucesso" });
  } catch (err) {
    console.error(err);

    if (err.name === "CastError") {
      return res.status(400).json({ erro: "ID inválido" });
    }

    return res.status(500).json({ erro: "Erro ao deletar produto" });
  }
};
