const Carrera = require('../models/carreraModel');

exports.getCarreras = async (req, res, next) => {
  try {
    const carreras = await Carrera.findAll();
    res.json({ success: true, data: carreras });
  } catch (error) {
    next(error);
  }
};

exports.createCarrera = async (req, res, next) => {
  try {
    const { nombre, descripcion = null } = req.body;

    if (!nombre) {
      return res.status(400).json({ success: false, message: 'nombre es obligatorio' });
    }

    const insertedId = await Carrera.create({ nombre, descripcion });
    const carrera = await Carrera.findById(insertedId);

    res.status(201).json({
      success: true,
      message: 'Carrera creada correctamente',
      data: carrera
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCarrera = async (req, res, next) => {
  try {
    const { nombre, descripcion = null } = req.body;
    const { id } = req.params;

    if (!nombre) {
      return res.status(400).json({ success: false, message: 'nombre es obligatorio' });
    }

    const updated = await Carrera.update(id, { nombre, descripcion });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Carrera no encontrada' });
    }

    const carrera = await Carrera.findById(id);
    res.json({
      success: true,
      message: 'Carrera actualizada correctamente',
      data: carrera
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCarrera = async (req, res, next) => {
  try {
    const deleted = await Carrera.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Carrera no encontrada' });
    }
    res.json({ success: true, message: 'Carrera eliminada correctamente' });
  } catch (error) {
    next(error);
  }
};
