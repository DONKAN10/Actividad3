import { Schema, model } from 'mongoose';

const ProducerSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  slogan: { type: String, required: true },
  description: { type: String, required: true },
});

export const ProducerModel = model('Producer', ProducerSchema);
