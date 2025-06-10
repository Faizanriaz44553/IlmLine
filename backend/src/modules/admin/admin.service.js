// admin.service.js
import Admin from './admin.model.js';

export const AdminService = {
  createAdmin: async (payload) => {
    return await Admin.create(payload);
  },

  getAllAdmins: async (instituteId) => {
    return await Admin.find({ instituteId }).populate('authId', 'name email role');
  },

  getAdminByAuthId: async (authId) => {
    return await Admin.findOne({ authId }).populate('instituteId');
  },

  updateAdmin: async (authId, data) => {
    return await Admin.findOneAndUpdate({ authId }, data, { new: true });
  },

  deleteAdmin: async (authId) => {
    return await Admin.findOneAndDelete({ authId });
  }
};
