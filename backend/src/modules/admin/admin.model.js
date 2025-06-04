// features/admin/admin.model.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    authId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
      unique: true,
    },
    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute", // You'll define this in institute module
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: String,
    profileImage: String,
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
