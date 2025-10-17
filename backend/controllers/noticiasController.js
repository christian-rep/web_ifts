const Noticia = require("../models/noticiaModel");

const getNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener noticias" });
  }
};

const crearNoticia = async (req, res) => {
  try {
    const nuevaNoticia = new Noticia(req.body);
    await nuevaNoticia.save();
    res.status(201).json({ mensaje: "Noticia creada", noticia: nuevaNoticia });
  } catch (error) {
    res.status(500).json({ error: "Error al crear noticia" });
  }
};

module.exports = { getNoticias, crearNoticia };
