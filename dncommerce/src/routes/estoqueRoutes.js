const router = require("express").Router();
const controller = require("../controllers/estoqueController");

router.post("/", controller.criar);
router.get("/", controller.listar);
router.put("/:produtoId", controller.atualizar);

module.exports = router;

