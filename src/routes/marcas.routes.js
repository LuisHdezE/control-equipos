const express = require("express");
const marcasController = require("../controllers/marcasController");

const router = express.Router();

router.get("/", marcasController.getAllMarcas);
router.get("/:id", marcasController.obtenerMarcaPorId);
router.post("/", marcasController.createMarca);
router.post("/", marcasController.crearMarca);
router.put("/:id", marcasController.actualizarMarca);
router.delete("/:id", marcasController.eliminarMarca);

module.exports = router;
