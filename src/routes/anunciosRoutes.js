const express = require('express');
const controller = require('../controllers/anunciosController');

const router = express.Router();

router.get('/', controller.getAnuncios);
router.post('/', controller.createAnuncio);
router.put('/:id', controller.updateAnuncio);
router.delete('/:id', controller.deleteAnuncio);

module.exports = router;
