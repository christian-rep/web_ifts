const { mysqlConnection } = require("../config/db");

const login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const [rows] = await mysqlConnection.query(
      "SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
      [usuario, password]
    );

    if (rows.length > 0) {
      res.json({ mensaje: "Login exitoso", usuario: rows[0] });
    } else {
      res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el login" });
  }
};

module.exports = { login };
