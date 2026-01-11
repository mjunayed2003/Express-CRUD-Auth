import type { Request, Response } from "express";
export declare const createTodoController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTodosController: (req: Request, res: Response) => Promise<void>;
export declare const getTodoController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTodoController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTodoController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=todo.controller.d.ts.map