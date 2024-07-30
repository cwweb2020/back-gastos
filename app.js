import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

// importo la conexion a la bd // el sequelize
import db from "./database/db.js";

// importo enrutador

import gastoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/gastos", gastoRoutes);

try {
  await db.authenticate();
  console.log("conexion exitosa");
} catch (error) {
  console.log(error);
}

// app.get("/", (req, res) => {
//   res.send("HOLA DESDE LA BASE DE DATOS");
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("puerto funcionando en " + PORT);
});
