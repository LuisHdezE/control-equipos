const fs = require("fs");
const path = require("path");

const EQUIPOS_FILE = path.join(__dirname, "../../data/db.json");

function leerEquipos() {
  const contenido = fs.readFileSync(EQUIPOS_FILE, "utf-8");
  return JSON.parse(contenido);
}

function escribirEquipos(equipos) {
  const contenido = JSON.stringify(equipos, null, 2);
  fs.writeFileSync(EQUIPOS_FILE, contenido, "utf-8");
}

function obtenerTodosLosEquipos() {
  const equipos = leerEquipos().equipos;
  return equipos;
}

function obtenerEquipoPorId(id) {
  const equipos = leerEquipos().equipos;
  const equipo = equipos.find((e) => e.numero === id);
  return equipo;
}

function crearEquipo(equipo) {
  const equipos = leerEquipos().equipos;
  equipo.numero = generarNumeroDeEquipo();
  equipos.push(equipo);
  escribirEquipos({ equipos });
  return equipo;
}

function actualizarEquipo(id, datosDelEquipoActualizado) {
  const equipos = leerEquipos().equipos;
  const index = equipos.findIndex((e) => e.numero === id);
  if (index === -1) {
    return null;
  }
  equipos[index] = { ...equipos[index], ...datosDelEquipoActualizado };
  escribirEquipos({ equipos });
  return equipos[index];
}

function eliminarEquipo(id) {
  const equipos = leerEquipos().equipos;
  const index = equipos.findIndex((e) => e.numero === id);
  if (index === -1) {
    return null;
  }
  const equipoEliminado = equipos.splice(index, 1)[0];
  escribirEquipos({ equipos });
  return equipoEliminado;
}

function generarNumeroDeEquipo() {
  const equipos = leerEquipos().equipos;
  const numerosDeEquipos = equipos.map((e) => parseInt(e.numero, 10));
  const ultimoNumeroDeEquipo = Math.max(...numerosDeEquipos);
  return (ultimoNumeroDeEquipo + 1).toString().padStart(3, "0");
}

module.exports = {
  obtenerTodosLosEquipos,
  obtenerEquipoPorId,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
};
