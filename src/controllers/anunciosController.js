const Anuncio = require('../models/anuncioModel');

exports.getAnuncios = async (req, res, next) => {
  try {
    const anuncios = await Anuncio.findAll();
    res.json({ success: true, data: anuncios });
  } catch (error) {
    next(error);
  }
};

exports.createAnuncio = async (req, res, next) => {
  try {
    const { titulo, contenido, fechaPublicacion = new Date() } = req.body;

    if (!titulo || !contenido) {
      return res.status(400).json({
        success: false,
        message: 'titulo y contenido son obligatorios'
      });
    }

    const insertedId = await Anuncio.create({ titulo, contenido, fechaPublicacion });
    const anuncio = await Anuncio.findById(insertedId);

    res.status(201).json({
      success: true,
      message: 'Anuncio creado correctamente',
      data: anuncio
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAnuncio = async (req, res, next) => {
  try {
    const { titulo, contenido, fechaPublicacion = new Date() } = req.body;
    const { id } = req.params;

    if (!titulo || !contenido) {
      return res.status(400).json({
        success: false,
        message: 'titulo y contenido son obligatorios'
      });
    }

    const updated = await Anuncio.update(id, { titulo, contenido, fechaPublicacion });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Anuncio no encontrado' });
    }

    const anuncio = await Anuncio.findById(id);
    res.json({
      success: true,
      message: 'Anuncio actualizado correctamente',
      data: anuncio
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAnuncio = async (req, res, next) => {
  try {
    const deleted = await Anuncio.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Anuncio no encontrado' });
    }
    res.json({ success: true, message: 'Anuncio eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};
