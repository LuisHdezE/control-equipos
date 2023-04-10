const express = require("express");
const modelosController = require("../controllers/modelosController");

const router = express.Router();

router.get("/", modelosController.getAllModelos);
router.get("/:id", modelosController.obtenerModeloPorId);
router.post("/", modelosController.createModelo);
router.post("/", modelosController.crearModelo);
router.put("/:id", modelosController.actualizarModelo);
router.delete("/:id", modelosController.eliminarModelo);

module.exports = router;
