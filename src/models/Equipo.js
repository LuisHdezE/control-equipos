class Equipo {
  constructor(
    seleccionar,
    numero,
    marca,
    modelo,
    imei,
    diagnostico,
    nota,
    bloqueado,
    repuestos
  ) {
    this.seleccionar = seleccionar;
    this.numero = numero;
    this.marca = marca;
    this.modelo = modelo;
    this.imei = imei;
    this.diagnostico = diagnostico;
    this.nota = nota;
    this.bloqueado = bloqueado;
    this.repuestos = repuestos;
  }
}

module.exports = Equipo;
