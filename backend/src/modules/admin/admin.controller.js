// admin.controller.js
import { AdminService } from './admin.service.js';

export const AdminController = {
  getAll: async (req, res) => {
    try {
      const admins = await AdminService.getAllAdmins(req.user.instituteId);
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const admin = await AdminService.getAdminByAuthId(req.params.authId);
      if (!admin) return res.status(404).json({ message: 'Admin not found' });
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await AdminService.updateAdmin(req.params.authId, req.body);
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await AdminService.deleteAdmin(req.params.authId);
      res.status(200).json({ message: 'Admin deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
