const mongoose = require('mongoose');
require('dotenv').config();

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB conectado com sucesso");
  } catch (error) {
    console.error("❌ Erro ao conectar MongoDB:", error);
  }
}

module.exports = connectMongo;
