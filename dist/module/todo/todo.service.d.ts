import type { ITodo } from "./todo.interface.js";
export declare const createTodo: (payload: {
    title: string;
    description: string;
}) => Promise<ITodo>;
export declare const getAllTodos: (status?: boolean) => Promise<ITodo[]>;
export declare const getTodoById: (id: string) => Promise<ITodo | null>;
export declare const updateTodoById: (id: string, payload: Partial<ITodo>) => Promise<ITodo | null>;
export declare const deleteTodoById: (id: string) => Promise<ITodo | null>;
//# sourceMappingURL=todo.service.d.ts.map