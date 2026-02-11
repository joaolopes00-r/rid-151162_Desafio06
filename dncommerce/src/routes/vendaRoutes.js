const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

router.post('/', vendaController.criarVenda);
router.get('/', vendaController.listarVendas);
router.delete('/:id', vendaController.deletarVenda);

module.exports = router;
