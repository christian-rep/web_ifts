const { pool } = require('../config/db');

exports.findAll = async () => {
  const [rows] = await pool.query(
    'SELECT id, nombre, descripcion FROM carreras ORDER BY nombre'
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(
    'SELECT id, nombre, descripcion FROM carreras WHERE id = ?',
    [id]
  );
  return rows[0] || null;
};

exports.create = async ({ nombre, descripcion }) => {
  const [result] = await pool.query(
    'INSERT INTO carreras (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  return result.insertId;
};

exports.update = async (id, { nombre, descripcion }) => {
  const [result] = await pool.query(
    'UPDATE carreras SET nombre = ?, descripcion = ? WHERE id = ?',
    [nombre, descripcion, id]
  );
  return result.affectedRows > 0;
};

exports.remove = async (id) => {
  const [result] = await pool.query('DELETE FROM carreras WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
