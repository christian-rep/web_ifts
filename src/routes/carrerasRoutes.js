const express = require('express');
const controller = require('../controllers/carrerasController');

const router = express.Router();

router.get('/', controller.getCarreras);
router.post('/', controller.createCarrera);
router.put('/:id', controller.updateCarrera);
router.delete('/:id', controller.deleteCarrera);

module.exports = router;
