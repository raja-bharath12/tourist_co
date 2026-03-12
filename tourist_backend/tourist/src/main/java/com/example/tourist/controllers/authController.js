import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Invalid password" });

  res.json({ success: true, message: "Login successful" });
};
