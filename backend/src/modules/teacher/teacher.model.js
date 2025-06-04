// features/teacher/teacher.model.js
import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    authId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
      unique: true,
    },
    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    subjects: [String],
    phone: String,
    profileImage: String,
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
