import express from "express";
import {
  getAllGestor,
  getOneGestor,
  createGestor,
  updateGestor,
  deleteGestor,
} from "../controllers/gestor.controller.js";

const router = express.Router();

//Routes
router.get("/", getAllGestor);

//Consultar un gestor
router.get("/:id", getOneGestor);

//Crear gestores
router.post("/", createGestor);

//Modificar gestores
router.put("/:id", updateGestor);

//Eliminar gestores
router.delete("/:id", deleteGestor);

export default router;
