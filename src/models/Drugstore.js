import mongoose from 'mongoose';

const { Schema } = mongoose;
const docSchema = new Schema(
  {
    drugstore_name: String,
    drugstore_uid: { type: String, index: true },
    inn: String,
    address: String,
    email: String,
    phone: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Drugstore', docSchema);
