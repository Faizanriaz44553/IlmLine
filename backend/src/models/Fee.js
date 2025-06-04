import mongoose from 'mongoose';

const feeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  month: String, // Jan, Feb, etc.
  amount: Number,
  status: { type: String, enum: ['paid', 'due'] },
}, { timestamps: true });

export default mongoose.model('Fee', feeSchema);