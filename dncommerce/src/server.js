require("dotenv").config();
const app = require("./config/app");

const { connectMySQL } = require("./database/mysql");
const { connectMongo } = require("./database/mongo");

const PORT = process.env.PORT || 3000;

async function start() {
  await connectMySQL();
  await connectMongo();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

start().catch((err) => {
  console.error("❌ Falha ao iniciar o servidor:", err.message);
  process.exit(1);
});
