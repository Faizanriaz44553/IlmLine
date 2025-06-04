import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema({
  name: String,
  address: String,
  logo: String,
  plan: String, // e.g., 'basic', 'pro'
}, { timestamps: true });

export default mongoose.model('Institute', instituteSchema);