const mongoose = require("mongoose");

async function connectMongo() {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI não definida no .env");
    }

    await mongoose.connect(uri);

    console.log("✅ MongoDB conectado com sucesso");
  } catch (err) {
    console.error("❌ Erro ao conectar MongoDB:", err.message);
    throw err;
  }
}

module.exports = { connectMongo };
