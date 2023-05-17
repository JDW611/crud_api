import { Router } from "express";
import {
    createToDo,
    deleteToDo,
    getAllTodo,
    getTodoById,
    updateTodo,
} from "../controller/control";

const router = Router();

router.post("/todos", createToDo);

router.get("/todos", getAllTodo);

router.get("/todos:id", getTodoById);

router.put("/todos:id", updateTodo);

router.delete("/todos:id", deleteToDo);

export default router;
