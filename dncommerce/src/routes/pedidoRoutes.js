const router = require("express").Router();
const controller = require("../controllers/pedidoController");

router.post("/", controller.criarPedido);
router.get("/", controller.listarPedidos);
router.get("/:id", controller.buscarPedido);


module.exports = router;
