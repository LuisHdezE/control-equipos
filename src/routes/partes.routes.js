const express = require("express");
const partesController = require("../controllers/partesController");

const router = express.Router();

router.get("/", partesController.getAllPartes);
router.get("/:id", partesController.obtenerPartePorId);
router.post("/", partesController.createParte);
router.post("/", partesController.crearParte);
router.put("/:id", partesController.actualizarParte);
router.delete("/:id", partesController.eliminarParte);

module.exports = router;
