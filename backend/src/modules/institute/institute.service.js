import Institute from "./institute.model.js";

export const InstituteService = {
  createInstitute: async (data) => {
    const exists = await Institute.findOne({ name: data.name });
    if (exists) throw new Error("Institute already exists");

    const institute = await Institute.create(data);
    return institute;
  },

  getAllInstitutes: async () => {
    return await Institute.find().sort({ createdAt: -1 });
  },

  getInstituteById: async (id) => {
    const institute = await Institute.findById(id);
    if (!institute) throw new Error("Institute not found");
    return institute;
  },

  updateInstitute: async (id, updateData) => {
    const updated = await Institute.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) throw new Error("Institute update failed");
    return updated;
  },

  deleteInstitute: async (id) => {
    const deleted = await Institute.findByIdAndDelete(id);
    if (!deleted) throw new Error("Institute deletion failed");
    return deleted;
  }
};
