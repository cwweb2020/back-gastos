// models/IngresoModel.js

import db from "../database/db.js";
import { DataTypes } from "sequelize";

const IngresoModel = db.define(
  "ingresos",
  {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Deshabilitar las columnas `createdAt` y `updatedAt`
    tableName: "ingreso", // Asegúrate de que coincide con el nombre de tu tabla
  }
);

export default IngresoModel;
