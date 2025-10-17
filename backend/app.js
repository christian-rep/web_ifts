const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
const authRoutes = require("./routes/authRoutes");
const noticiasRoutes = require("./routes/noticiasRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/noticias", noticiasRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
