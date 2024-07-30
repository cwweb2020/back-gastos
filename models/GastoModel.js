import db from "../database/db.js";

import { DataTypes } from "sequelize";

const GastoModel = db.define(
  "gastos",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
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
    tableName: "gasto", // Asegúrate de que coincide con el nombre de tu tabla
  }
);

export default GastoModel;
