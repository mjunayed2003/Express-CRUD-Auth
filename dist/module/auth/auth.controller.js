import { registerUser, loginUser } from "./auth.service.js";
export const registerController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required",
        });
    }
    await registerUser(email, password);
    res.status(201).json({
        message: "User registered successfully",
    });
};
export const loginController = async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({
        token,
    });
};
//# sourceMappingURL=auth.controller.js.map