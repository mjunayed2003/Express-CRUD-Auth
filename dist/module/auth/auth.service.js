import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "./auth.model.js";
export const registerUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return UserModel.create({
        email,
        password: hashedPassword,
    });
};
export const loginUser = async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
};
//# sourceMappingURL=auth.service.js.map