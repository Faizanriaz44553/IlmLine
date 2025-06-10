// admin.model.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  authId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth',
    required: true,
    unique: true,
  },
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Institute',
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;