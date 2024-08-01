import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

// Cargar variables de entorno desde .env
dotenv.config();

// importo la conexion a la bd // el sequelize
import db from "./database/db.js";

// Importar enrutadores
import gastoRoutes from "./routes/gastoRoutes.js";
import ingresoRoutes from "./routes/ingresoRoutes.js";

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
// Rutas
app.use("/gastos", gastoRoutes);
app.use("/ingresos", ingresoRoutes);

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
  console.log("backend funcionando en el puerto " + PORT);
});
