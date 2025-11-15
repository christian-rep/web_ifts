const Profesor = require('../models/profesorModel');

exports.getProfesores = async (req, res, next) => {
  try {
    const profesores = await Profesor.findAll();
    res.json({ success: true, data: profesores });
  } catch (error) {
    next(error);
  }
};

exports.createProfesor = async (req, res, next) => {
  try {
    const { nombre, email = null, telefono = null } = req.body;

    if (!nombre) {
      return res.status(400).json({ success: false, message: 'nombre es obligatorio' });
    }

    const insertedId = await Profesor.create({ nombre, email, telefono });
    const profesor = await Profesor.findById(insertedId);

    res.status(201).json({
      success: true,
      message: 'Profesor creado correctamente',
      data: profesor
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProfesor = async (req, res, next) => {
  try {
    const { nombre, email = null, telefono = null } = req.body;
    const { id } = req.params;

    if (!nombre) {
      return res.status(400).json({ success: false, message: 'nombre es obligatorio' });
    }

    const updated = await Profesor.update(id, { nombre, email, telefono });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Profesor no encontrado' });
    }

    const profesor = await Profesor.findById(id);
    res.json({
      success: true,
      message: 'Profesor actualizado correctamente',
      data: profesor
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProfesor = async (req, res, next) => {
  try {
    const deleted = await Profesor.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Profesor no encontrado' });
    }
    res.json({ success: true, message: 'Profesor eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};
