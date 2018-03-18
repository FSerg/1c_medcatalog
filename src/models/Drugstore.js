import mongoose from 'mongoose';

const { Schema } = mongoose;
const docSchema = new Schema({
  drugstore_name: String,
  drugstore_uid: { type: String, index: true },
  inn: String,
  address: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Drugstore', docSchema);
