import Ingreso from "../models/IngresoModel.js";

import { Op } from "sequelize";
import sequelize from "../database/db.js";

// va a obtener los gastos por mes
export const getIngresosByMonth = async (req, res) => {
  const { year, month } = req.params;
  try {
    const ingresos = await Ingreso.findAll({
      where: {
        [Op.and]: [
          sequelize.where(
            sequelize.fn("YEAR", sequelize.col("created_at")),
            year
          ),
          sequelize.where(
            sequelize.fn("MONTH", sequelize.col("created_at")),
            month
          ),
        ],
      },
    });
    res.status(200).json(ingresos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los ingresos para el mes especificado",
    });
  }
};
