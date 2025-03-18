const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    quality: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false, // Optional based on your form input
    },
    color: {
      type: String,
      required: false, // Optional
    },
    material: {
      type: String,
      required: false, // Optional
    },
    brand: {
      type: String,
      required: false, // Optional
    },
    price: {
      type: Number,
      required: true, // Price is required for every product
    },
    oldPrice: {
      type: Number,
      default: null, // If there's no old price, it can be null
    },
    discount: {
      type: Number,
      required: false, // Optional
    },
    description: {
      type: String,
      required: false, // Optional
    },
    images: {
      type: String, // Array of image paths (for multiple images)
      required: false, // Optional, depending on your use case
    },
    deliveryFree: {
      type: Boolean,
      required: true,
      default: false, // Whether the delivery is free or not
    },
    reviews: {
      type: Number,
      required: false, // Optional
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to the Category model
      required: true,
    },
    images: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
