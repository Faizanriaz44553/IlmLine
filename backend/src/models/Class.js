import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: String,
  schedule: [
    {
      day: String, // Monday, etc.
      startTime: String,
      endTime: String,
      room: String,
    },
  ],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
}, { timestamps: true });

export default mongoose.model('Class', classSchema);