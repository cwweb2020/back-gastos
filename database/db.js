// database/database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: true,
  }
);

try {
  await sequelize.authenticate();
  console.log("La conexión a la base de datos se ha establecido con éxito.");
} catch (error) {
  console.error("No se puede conectar a la base de datos:", error);
}

export default sequelize;
