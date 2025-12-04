const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a SinFiltroApp — Servidor activo.");
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
