const { pool } = require('../config/db');

exports.findAll = async () => {
  const [rows] = await pool.query(
    `SELECT m.id,
            m.nombre,
            m.descripcion,
            m.profesor_id AS profesorId,
            m.carrera_id AS carreraId,
            p.nombre AS profesorNombre,
            c.nombre AS carreraNombre
     FROM materias m
     LEFT JOIN profesores p ON m.profesor_id = p.id
     LEFT JOIN carreras c ON m.carrera_id = c.id
     ORDER BY m.nombre`
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(
    `SELECT m.id,
            m.nombre,
            m.descripcion,
            m.profesor_id AS profesorId,
            m.carrera_id AS carreraId,
            p.nombre AS profesorNombre,
            c.nombre AS carreraNombre
     FROM materias m
     LEFT JOIN profesores p ON m.profesor_id = p.id
     LEFT JOIN carreras c ON m.carrera_id = c.id
     WHERE m.id = ?`,
    [id]
  );
  return rows[0] || null;
};

exports.create = async ({ nombre, descripcion, profesorId, carreraId }) => {
  const [result] = await pool.query(
    `INSERT INTO materias (nombre, descripcion, profesor_id, carrera_id)
     VALUES (?, ?, ?, ?)`,
    [nombre, descripcion, profesorId, carreraId]
  );
  return result.insertId;
};

exports.update = async (id, { nombre, descripcion, profesorId, carreraId }) => {
  const [result] = await pool.query(
    `UPDATE materias
     SET nombre = ?, descripcion = ?, profesor_id = ?, carrera_id = ?
     WHERE id = ?`,
    [nombre, descripcion, profesorId, carreraId, id]
  );
  return result.affectedRows > 0;
};

exports.remove = async (id) => {
  const [result] = await pool.query('DELETE FROM materias WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
