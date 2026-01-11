import { Schema, model } from "mongoose";
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
export const TodoModel = model("Todo", todoSchema);
//# sourceMappingURL=todo.model.js.map