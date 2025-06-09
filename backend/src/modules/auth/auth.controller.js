import { AuthService } from './auth.service.js';

export const AuthController = {
  register: async (req, res, next) => {
    try {
      const currentUserRole = req.user?.role || null;
      const result = await AuthService.register(req.body, currentUserRole);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};
