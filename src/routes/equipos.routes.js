const express = require("express");
const equiposController = require("../controllers/equiposController");

const equiposRouter = express.Router();

// Rutas relacionadas con los equipos
equiposRouter.get("/", equiposController.listarEquipos);
equiposRouter.get("/:id", equiposController.obtenerEquipoPorId);
equiposRouter.post("/", equiposController.crearEquipo);
equiposRouter.put("/:id", equiposController.actualizarEquipo);
equiposRouter.delete("/:id", equiposController.eliminarEquipo);

module.exports = equiposRouter;
