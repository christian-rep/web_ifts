const Materia = require('../models/materiaModel');

exports.getMaterias = async (req, res, next) => {
  try {
    const materias = await Materia.findAll();
    res.json({ success: true, data: materias });
  } catch (error) {
    next(error);
  }
};

exports.getMateriaById = async (req, res, next) => {
  try {
    const materia = await Materia.findById(req.params.id);
    if (!materia) {
      return res.status(404).json({ success: false, message: 'Materia no encontrada' });
    }
    res.json({ success: true, data: materia });
  } catch (error) {
    next(error);
  }
};

exports.createMateria = async (req, res, next) => {
  try {
    const { nombre, descripcion = null, profesorId, carreraId } = req.body;

    if (!nombre || !profesorId || !carreraId) {
      return res.status(400).json({
        success: false,
        message: 'nombre, profesorId y carreraId son obligatorios'
      });
    }

    const insertedId = await Materia.create({ nombre, descripcion, profesorId, carreraId });
    const materia = await Materia.findById(insertedId);

    res.status(201).json({
      success: true,
      message: 'Materia creada correctamente',
      data: materia
    });
  } catch (error) {
    next(error);
  }
};

exports.updateMateria = async (req, res, next) => {
  try {
    const { nombre, descripcion = null, profesorId, carreraId } = req.body;
    const { id } = req.params;

    if (!nombre || !profesorId || !carreraId) {
      return res.status(400).json({
        success: false,
        message: 'nombre, profesorId y carreraId son obligatorios'
      });
    }

    const updated = await Materia.update(id, { nombre, descripcion, profesorId, carreraId });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Materia no encontrada' });
    }

    const materia = await Materia.findById(id);
    res.json({
      success: true,
      message: 'Materia actualizada correctamente',
      data: materia
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteMateria = async (req, res, next) => {
  try {
    const deleted = await Materia.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Materia no encontrada' });
    }
    res.json({ success: true, message: 'Materia eliminada correctamente' });
  } catch (error) {
    next(error);
  }
};
