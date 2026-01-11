import { TodoModel } from "./todo.model.js";
export const createTodo = async (payload) => {
    return TodoModel.create({
        title: payload.title,
        description: payload.description,
        status: false,
    });
};
export const getAllTodos = async (status) => {
    const filter = {};
    if (status !== undefined) {
        filter.status = status;
    }
    return TodoModel.find(filter).sort({ createdAt: -1 });
};
export const getTodoById = async (id) => {
    return TodoModel.findById(id);
};
export const updateTodoById = async (id, payload) => {
    return TodoModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
};
export const deleteTodoById = async (id) => {
    return TodoModel.findByIdAndDelete(id);
};
//# sourceMappingURL=todo.service.js.map