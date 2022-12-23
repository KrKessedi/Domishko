const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    comm: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
