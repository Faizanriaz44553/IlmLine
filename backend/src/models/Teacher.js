import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  name: String,
  subjects: [String],
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
}, { timestamps: true });

export default mongoose.model('Teacher', teacherSchema);