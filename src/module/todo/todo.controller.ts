import type { Request, Response } from "express";
import * as TodoService from "./todo.service.js";

export const createTodoController = async (
  req: Request,
  res: Response
) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const todo = await TodoService.createTodo({
    title,
    description,
  });

  res.status(201).json({
    message: "Todo created successfully",
    data: todo,
  });
};

export const getTodosController = async (
  req: Request,
  res: Response
) => {
  const status =
    req.query.status !== undefined
      ? req.query.status === "true"
      : undefined;

  const todos = await TodoService.getAllTodos(status);

  res.status(200).json({
    data: todos,
  });
};

export const getTodoController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const todo = await TodoService.getTodoById(id || '');

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.status(200).json({
    data: todo,
  });
};

export const updateTodoController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  if (req.body.title === "") {
    return res.status(400).json({
      message: "Title cannot be empty",
    });
  }

  const todo = await TodoService.updateTodoById(id || '', req.body);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.status(200).json({
    message: "Todo updated successfully",
    data: todo,
  });
};

export const deleteTodoController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const todo = await TodoService.deleteTodoById(id || '');

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.status(200).json({
    message: "Todo deleted successfully",
  });
};
