import { RequestHandler } from "express";
import {
    createToDos,
    getAllTodos,
    getTodosById,
    deleteToDos,
    updateTodos,
} from "../services/service";

export const createToDo: RequestHandler = (req, res, next) => {
    try {
        let todos = createToDos(req, res, next);
        return res
            .status(200)
            .json({ message: "created successfully!!", data: todos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const getAllTodo: RequestHandler = (req, res, next) => {
    try {
        let allTodos = services.getAllTodos(req, res, next);
        return res
            .status(200)
            .json({ message: "fetched successfully!", data: allTodos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const getTodoById: RequestHandler = (req, res, next) => {
    try {
        const todos = services.getTodosById(req, res, next);
        return res
            .status(200)
            .json({ message: "fetched successfully", data: todos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const updateTodo: RequestHandler = (req, res, next) => {
    try {
        const updatedTodo = services.updateTodos(req, res, next);
        return res
            .status(200)
            .json({ message: "updated succesfully!", data: updatedTodo });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const deleteToDo: RequestHandler = (req, res, next) => {
    try {
        const deleteTodo = services.deleteToDos(req, res, next);
        return res
            .status(200)
            .json({ message: "deleted successfully!", data: deleteTodo });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
