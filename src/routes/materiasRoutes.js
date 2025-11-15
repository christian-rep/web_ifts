const express = require('express');
const controller = require('../controllers/materiasController');

const router = express.Router();

router.get('/', controller.getMaterias);
router.get('/:id', controller.getMateriaById);
router.post('/', controller.createMateria);
router.put('/:id', controller.updateMateria);
router.delete('/:id', controller.deleteMateria);

module.exports = router;
