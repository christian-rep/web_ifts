const { pool } = require('../config/db');

exports.findAll = async () => {
  const [rows] = await pool.query(
    `SELECT id,
            titulo,
            contenido,
            fecha_publicacion AS fechaPublicacion
     FROM anuncios
     ORDER BY fecha_publicacion DESC`
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id,
            titulo,
            contenido,
            fecha_publicacion AS fechaPublicacion
     FROM anuncios
     WHERE id = ?`,
    [id]
  );
  return rows[0] || null;
};

exports.create = async ({ titulo, contenido, fechaPublicacion }) => {
  const [result] = await pool.query(
    `INSERT INTO anuncios (titulo, contenido, fecha_publicacion)
     VALUES (?, ?, ?)`,
    [titulo, contenido, fechaPublicacion]
  );
  return result.insertId;
};

exports.update = async (id, { titulo, contenido, fechaPublicacion }) => {
  const [result] = await pool.query(
    `UPDATE anuncios
     SET titulo = ?, contenido = ?, fecha_publicacion = ?
     WHERE id = ?`,
    [titulo, contenido, fechaPublicacion, id]
  );
  return result.affectedRows > 0;
};

exports.remove = async (id) => {
  const [result] = await pool.query('DELETE FROM anuncios WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
