import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";


export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized - Token Missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attaches user info like role, id, etc.
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }
};
