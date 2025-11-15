const express = require('express');
const controller = require('../controllers/profesoresController');

const router = express.Router();

router.get('/', controller.getProfesores);
router.post('/', controller.createProfesor);
router.put('/:id', controller.updateProfesor);
router.delete('/:id', controller.deleteProfesor);

module.exports = router;
