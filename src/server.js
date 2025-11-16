const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');
const { testConnection } = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Recurso no encontrado'
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor'
  });
});

(async () => {
  try {
    await testConnection();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT} - Base de datos conectada correctamente.`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
    process.exit(1);
  }
})();
