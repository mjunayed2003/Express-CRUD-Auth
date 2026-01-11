import { Schema, model } from "mongoose";
import {} from "./auth.interface.js";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
export const UserModel = model("User", userSchema);
//# sourceMappingURL=auth.model.js.map