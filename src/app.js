const express = require("express");
const equiposRoutes = require("./routes/equipos.routes");

const app = express();

app.use(express.json());

// Rutas de la aplicación
app.use("/api/equipos", equiposRoutes);

module.exports = app;
