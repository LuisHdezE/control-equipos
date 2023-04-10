const fs = require("fs");

const filePath = "./data.json";

function getPartes() {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data.partes;
}

function getParteByCodigo(codigo) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data.partes.find((parte) => parte.codigo === codigo);
}

function addParte(parte) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.partes.push(parte);
  fs.writeFileSync(filePath, JSON.stringify(data));
}

function updateParte(codigo, newParte) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = data.partes.findIndex((parte) => parte.codigo === codigo);
  if (index !== -1) {
    data.partes[index] = { ...newParte, codigo };
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

function deleteParte(codigo) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = data.partes.findIndex((parte) => parte.codigo === codigo);
  if (index !== -1) {
    data.partes.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

module.exports = {
  getPartes,
  getParteByCodigo,
  addParte,
  updateParte,
  deleteParte,
};
