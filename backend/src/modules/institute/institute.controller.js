import { InstituteService } from "./institute.service.js";

export const InstituteController = {
  create: async (req, res) => {
    try {
      const institute = await InstituteService.createInstitute({
        ...req.body,
        createdBy: req.user.userId,
      });
      res.status(201).json({ message: "Institute created", institute });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const institutes = await InstituteService.getAllInstitutes();
      res.json({ institutes });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const institute = await InstituteService.getInstituteById(req.params.id);
      res.json({ institute });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await InstituteService.updateInstitute(req.params.id, req.body);
      res.json({ message: "Updated", institute: updated });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  remove: async (req, res) => {
    try {
      const deleted = await InstituteService.deleteInstitute(req.params.id);
      res.json({ message: "Deleted", institute: deleted });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
