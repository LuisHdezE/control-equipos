const equiposRepository = require("../repositories/equiposRepository");

function listarEquipos(req, res) {
  const equipos = equiposRepository.obtenerTodosLosEquipos();
  res.status(200).json(equipos);
}

function obtenerEquipoPorId(req, res) {
  const equipo = equiposRepository.obtenerEquipoPorId(req.params.id);
  if (!equipo) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  } else {
    res.status(200).json(equipo);
  }
}

function crearEquipo(req, res) {
  const nuevoEquipo = req.body;
  const equipoCreado = equiposRepository.crearEquipo(nuevoEquipo);
  res.status(201).json(equipoCreado);
}

function actualizarEquipo(req, res) {
  const id = req.params.id;
  const equipoActualizado = equiposRepository.actualizarEquipo(id, req.body);
  if (!equipoActualizado) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  } else {
    res.status(200).json(equipoActualizado);
  }
}

function eliminarEquipo(req, res) {
  const id = req.params.id;
  const equipoEliminado = equiposRepository.eliminarEquipo(id);
  if (!equipoEliminado) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  } else {
    res.status(200).json({ mensaje: "Equipo eliminado correctamente" });
  }
}

module.exports = {
  listarEquipos,
  obtenerEquipoPorId,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
};
