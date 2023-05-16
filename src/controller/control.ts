import { RequestHandler } from "express";
import { Todos } from "../models/model";

export const createToDo: RequestHandler = async (req, res, next) => {
  let todos = await Todos.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "created successfully!", data: todos });
};

export const getAllTodo: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] = await Todos.findAll();
  return res
    .status(200)
    .json({ message: "fetched successfully", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);
  return res.status(200).json({ message: "fetched successfully", data: todos });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updatedTodos: Todos | null = await Todos.findByPk(id);
  return res
    .status(200)
    .json({ message: "updated succesfully", data: updatedTodos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deleteToDo: Todos | null = await Todos.findByPk(id);
  await Todos.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "deleted successfully", data: deleteToDo });
};