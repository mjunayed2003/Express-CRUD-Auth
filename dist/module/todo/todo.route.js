import { Router } from "express";
import { createTodoController, getTodosController, getTodoController, updateTodoController, deleteTodoController, } from "./todo.controller.js";
const router = Router();
router.post("/", createTodoController);
router.get("/", getTodosController);
router.get("/:id", getTodoController);
router.put("/:id", updateTodoController);
router.delete("/:id", deleteTodoController);
export const TodoRoutes = router;
//# sourceMappingURL=todo.route.js.map