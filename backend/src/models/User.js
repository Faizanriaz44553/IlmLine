import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['superadmin', 'admin', 'teacher', 'parent'],
    required: true,
  },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
}, { timestamps: true });

export default mongoose.model('User', userSchema);