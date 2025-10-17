const express = require("express");
const router = express.Router();
const { getNoticias, crearNoticia } = require("../controllers/noticiasController");

router.get("/", getNoticias);
router.post("/", crearNoticia);

module.exports = router;
