import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  month: String,
  pdfLink: String,
}, { timestamps: true });

export default mongoose.model('Report', reportSchema);