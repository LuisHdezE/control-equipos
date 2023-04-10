const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "data.json");

function getAllMarcas() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return data.marcas;
}

function getMarcaById(codigo) {
  const data = JSON.parse(fs.readFileSync(filePath));
  const marca = data.marcas.find((m) => m.codigo === codigo);
  return marca;
}

function createMarca(marca) {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newMarca = { codigo: marca.codigo, nombre: marca.nombre };
  data.marcas.push(newMarca);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return newMarca;
}

function updateMarca(codigo, nombre) {
  const data = JSON.parse(fs.readFileSync(filePath));
  const index = data.marcas.findIndex((m) => m.codigo === codigo);
  if (index >= 0) {
    data.marcas[index].nombre = nombre;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return data.marcas[index];
  }
  return null;
}

function deleteMarca(codigo) {
  const data = JSON.parse(fs.readFileSync(filePath));
  const index = data.marcas.findIndex((m) => m.codigo === codigo);
  if (index >= 0) {
    const marca = data.marcas.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return marca[0];
  }
  return null;
}

module.exports = {
  getAllMarcas,
  getMarcaById,
  createMarca,
  updateMarca,
  deleteMarca,
};
