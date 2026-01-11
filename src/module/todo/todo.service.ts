import type { ITodo } from "./todo.interface.js";
import { TodoModel } from "./todo.model.js";


export const createTodo = async (payload: {
  title: string;
  description: string;
}): Promise<ITodo> => {
  return TodoModel.create({
    title: payload.title,
    description: payload.description,
    status: false,
  });
};

export const getAllTodos = async (
  status?: boolean
): Promise<ITodo[]> => {
  const filter: any = {};

  if (status !== undefined) {
    filter.status = status;
  }

  return TodoModel.find(filter).sort({ createdAt: -1 });
};

export const getTodoById = async (
  id: string
): Promise<ITodo | null> => {
  return TodoModel.findById(id);
};

export const updateTodoById = async (
  id: string,
  payload: Partial<ITodo>
): Promise<ITodo | null> => {
  return TodoModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

export const deleteTodoById = async (
  id: string
): Promise<ITodo | null> => {
  return TodoModel.findByIdAndDelete(id);
};
