import { Router } from "express";
import {
  createToDo,
  deleteToDo,
  getAllTodo,
  getTodoById,
  updateTodo,
} from "../controller/control";

const router = Router();

router.post("/", createToDo);

router.get("/", getAllTodo);

router.get("/:id", getTodoById);

router.put("/:id", updateTodo);

router.delete("/:id", deleteToDo);

export default router;
