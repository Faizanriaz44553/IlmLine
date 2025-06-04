// features/superadmin/superadmin.model.js
import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema(
  {
    authId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
      unique: true,
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

const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);
export default SuperAdmin;
