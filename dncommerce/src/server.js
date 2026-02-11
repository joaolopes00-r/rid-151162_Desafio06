require('dotenv').config();

const createApp = require('./config/app');
const connectMongo = require('./database/mongo');
const { sequelize, connectMySQL } = require('./database/mysql');

require('./models/associations');

const routes = require('./routes');

const app = createApp();
app.use('/api', routes);

async function startServer() {
  try {
    console.log("🔄 Conectando bancos...");

    await connectMongo();
    await connectMySQL();
    await sequelize.sync({ alter: true });

    console.log("✅ Bancos sincronizados");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("❌ Erro ao iniciar aplicação:", error);
    process.exit(1);
  }
}

startServer();
