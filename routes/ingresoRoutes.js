// routes/ingresoRoutes.js

import express from "express";
import { getIngresosByMonth } from "../controllers/IngresoController.js";

const router = express.Router();

// Ruta para obtener ingresos por mes
router.get("/:year/:month", getIngresosByMonth);

export default router;
