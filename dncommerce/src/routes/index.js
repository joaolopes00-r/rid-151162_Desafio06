const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const clienteRoutes = require('./clienteRoutes');
const pedidoRoutes = require('./pedidoRoutes');
const vendaRoutes = require('./vendaRoutes');

router.use('/produtos', produtoRoutes);
router.use('/clientes', clienteRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/vendas', vendaRoutes);

module.exports = router;
