const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "marcas.json");

function getAll() {
  const modelosData = fs.readFileSync(filePath);
  return JSON.parse(modelosData).modelos;
}

function getById(id) {
  const modelosData = fs.readFileSync(filePath);
  const modelos = JSON.parse(modelosData).modelos;
  return modelos.find((modelo) => modelo.codigo === id);
}

function create(modelo) {
  const modelosData = fs.readFileSync(filePath);
  const modelos = JSON.parse(modelosData).modelos;
  const newModelo = { ...modelo, codigo: `${modelos.length + 1}` };
  modelos.push(newModelo);
  fs.writeFileSync(
    MODELOS_DB_PATH,
    JSON.stringify({ ...JSON.parse(modelosData), modelos })
  );
  return newModelo;
}

function update(id, modelo) {
  const modelosData = fs.readFileSync(filePath);
  const modelos = JSON.parse(modelosData).modelos;
  const index = modelos.findIndex((modelo) => modelo.codigo === id);
  if (index === -1) {
    return null;
  }
  const updatedModelo = { ...modelos[index], ...modelo };
  modelos[index] = updatedModelo;
  fs.writeFileSync(
    MODELOS_DB_PATH,
    JSON.stringify({ ...JSON.parse(modelosData), modelos })
  );
  return updatedModelo;
}

function remove(id) {
  const modelosData = fs.readFileSync(filePath);
  const modelos = JSON.parse(modelosData).modelos;
  const index = modelos.findIndex((modelo) => modelo.codigo === id);
  if (index === -1) {
    return null;
  }
  const removedModelo = modelos.splice(index, 1)[0];
  fs.writeFileSync(
    filePath,
    JSON.stringify({ ...JSON.parse(modelosData), modelos })
  );
  return removedModelo;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
