import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  profileImage: String,
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);