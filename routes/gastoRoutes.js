import express from "express";
import {
  getAllGastos,
  getGastosByMonth,
} from "../controllers/gastoController.js";

const router = express.Router();

router.get("/", getAllGastos);
router.get("/:year/:month", getGastosByMonth);

export default router;
