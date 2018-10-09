import mongoose from 'mongoose';

const { Schema } = mongoose;
const docSchema = new Schema({
  product: { type: String, index: true },
  product_id: String,
  product_uid: String,
  vital: Boolean,
  barcodes: [{ type: String, index: true }],
  batches: [
    {
      _id: false,
      batch_id: String,
      batch_uid: String,
      batch_name: String,
      expiration_date: Date,
      producer: String,
      count: Number,
      countStr: String,
      price: Number
    }
  ],
  drugstore: {
    _id: false,
    drugstore_name: String,
    drugstore_uid: { type: String, index: true }
  },
  count: Number,
  countStr: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Price', docSchema);
