const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* IMPORTANTE: subir um nível (../) */
const produtoRoutes = require("../routes/produtoRoutes");
const clienteRoutes = require("../routes/clienteRoutes");
const pedidoRoutes = require("../routes/pedidoRoutes");
const estoqueRoutes = require("../routes/estoqueRoutes");

app.use("/produtos", produtoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/estoque", estoqueRoutes);

app.get("/", (req, res) => {
  res.send("API DNCommerce funcionando 🚀");
});

module.exports = app;
