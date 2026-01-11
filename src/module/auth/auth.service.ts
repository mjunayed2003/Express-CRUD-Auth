import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "./auth.model.js";
import type { IUser } from "./auth.interface.js";

export const registerUser = async (
  email: string,
  password: string
): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return UserModel.create({
    email,
    password: hashedPassword,
  });
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return token;
};
