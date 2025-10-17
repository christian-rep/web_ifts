const mysql = require("mysql2/promise");
const mongoose = require("mongoose");

// Conexión MySQL (usuarios/login)
const mysqlConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

// Conexión MongoDB (noticias/contenido dinámico)
const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
  }
};

module.exports = { mysqlConnection, connectMongo };
