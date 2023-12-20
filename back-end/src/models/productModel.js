const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: { type: Number, },
    product_type: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: Array, required: true },
    thuong_hieu: { type: String, required: true },
    tinh_trang: { type: String, required: true },
    danh_gia: [
      { ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' }, }
    ],
    price: { type: Number, required: true },
    deleteAt: {},
  },
  {
    _id: false,
    timestamps: true,
  }

)

module.exports = mongoose.model('Product', productSchema);