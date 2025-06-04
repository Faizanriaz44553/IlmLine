import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  date: Date,
  status: { type: String, enum: ['present', 'absent', 'leave'] },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);