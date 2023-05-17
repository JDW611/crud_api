import { RequestHandler } from "express";
import { Todos } from "../models/model";

//export default class service {
export const createToDos: RequestHandler = async (req, res, next) => {
    const { name, description } = req.body;
    let todos = await Todos.create({ name, description });
    return todos;
};

export const getAllTodos: RequestHandler = async (req, res, next) => {
    const allTodos: Todos[] = await Todos.findAll();
    return allTodos;
};

export const getTodosById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const todos: Todos | null = await Todos.findByPk(id);
    return todos;
};

export const updateTodos: RequestHandler = async (req, res, next) => {
    const { name, description } = req.body;
    const { id } = req.params;
    await Todos.update({ name, description }, { where: { id } });
    const updatedTodos: Todos | null = await Todos.findByPk(id);
    return updatedTodos;
};

export const deleteToDos: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deleteTodo: Todos | null = await Todos.findByPk(id);
    await Todos.destroy({ where: { id } });
    return deleteTodo;
};
//}
