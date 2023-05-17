import { RequestHandler } from "express";
import { Todos } from "../models/model";

export const createToDo: RequestHandler = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        let todos = await Todos.create({ name, description });
        return res
            .status(200)
            .json({ message: "created successfully!!", data: todos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const getAllTodo: RequestHandler = async (req, res, next) => {
    try {
        const allTodos: Todos[] = await Todos.findAll();
        return res
            .status(200)
            .json({ message: "fetched successfully!", data: allTodos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const getTodoById: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todos: Todos | null = await Todos.findByPk(id);
        return res
            .status(200)
            .json({ message: "fetched successfully", data: todos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await Todos.update({ name, description }, { where: { id } });
        const updatedTodos: Todos | null = await Todos.findByPk(id);
        return res
            .status(200)
            .json({ message: "updated succesfully!", data: updatedTodos });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteToDo: Todos | null = await Todos.findByPk(id);
        await Todos.destroy({ where: { id } });
        return res
            .status(200)
            .json({ message: "deleted successfully!", data: deleteToDo });
    } catch (error) {
        return res.status(400).send({ message: error });
    }
};
