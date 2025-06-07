import Auth from "./auth.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const AuthService = {
  register: async ({ name, email, password }) => {
    console.log(name , email , password);
    const existingUser = await Auth.findOne({ email });
    if (existingUser) throw new Error('Email already registered');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      message: 'Registration successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },

  login: async ({ email, password }) => {
    console.log(email, password);
    
    const user = await Auth.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },
};
