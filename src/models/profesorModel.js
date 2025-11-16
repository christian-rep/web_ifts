const { pool } = require('../config/db');

exports.findAll = async () => {
  const [rows] = await pool.query(
    'SELECT id, nombre, email, telefono FROM profesores ORDER BY nombre'
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(
    'SELECT id, nombre, email, telefono FROM profesores WHERE id = ?',
    [id]
  );
  return rows[0] || null;
};

exports.create = async ({ nombre, email, telefono }) => {
  const [result] = await pool.query(
    'INSERT INTO profesores (nombre, email, telefono) VALUES (?, ?, ?)',
    [nombre, email, telefono]
  );
  return result.insertId;
};

exports.update = async (id, { nombre, email, telefono }) => {
  const [result] = await pool.query(
    'UPDATE profesores SET nombre = ?, email = ?, telefono = ? WHERE id = ?',
    [nombre, email, telefono, id]
  );
  return result.affectedRows > 0;
};

exports.remove = async (id) => {
  const [result] = await pool.query('DELETE FROM profesores WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
