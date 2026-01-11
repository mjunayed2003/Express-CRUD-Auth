import express from "express";
import cors from "cors";
import { TodoRoutes } from "./module/todo/todo.route.js";
import { AuthRoutes } from "./module/auth/auth.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello Junayed");
});
app.use("/api/auth", AuthRoutes);
app.use("/api/todos", TodoRoutes);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
export default app;
//# sourceMappingURL=index.js.map