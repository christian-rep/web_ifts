const express = require('express');
const materiasRoutes = require('./materiasRoutes');
const profesoresRoutes = require('./profesoresRoutes');
const carrerasRoutes = require('./carrerasRoutes');
const anunciosRoutes = require('./anunciosRoutes');

const router = express.Router();

router.use('/materias', materiasRoutes);
router.use('/profesores', profesoresRoutes);
router.use('/carreras', carrerasRoutes);
router.use('/anuncios', anunciosRoutes);

module.exports = router;
