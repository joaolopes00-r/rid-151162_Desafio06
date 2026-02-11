const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  preco: {
    type: Number,
    required: true
  },
  categoria: {
    type: String
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Produto', ProdutoSchema);
