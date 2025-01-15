import { Schema, model } from 'mongoose';

const sessionSchema = new Schema(
  {
    token: { type: 'String', required: true },
    association: { type: 'String' },
    expire: { type: Date, default: new Date(Date.now() + 3600000), expires: 0 }, // 1 hour
  },
  {
    timestamps: true,
  }
);

export default model('Session', sessionSchema);
