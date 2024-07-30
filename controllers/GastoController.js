// importamos modelo
import Gasto from "../models/GastoModel.js";
import { Op } from "sequelize";

import sequelize from "../database/db.js";

// metodos

// Método para obtener todos los registros de la tabla gasto
export const getAllGastos = async (req, res) => {
  try {
    const gastos = await Gasto.findAll();
    res.status(200).json(gastos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Método para obtener los gastos de un mes determinado
export const getGastosByMonth = async (req, res) => {
  const { year, month } = req.params;

  try {
    const gastos = await Gasto.findAll({
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
    res.status(200).json(gastos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
