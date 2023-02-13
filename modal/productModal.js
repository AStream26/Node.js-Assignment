const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  quantity: {
    type: Number,
    default: 5,
  },
  ratting: {
    type: Number,
    default: 4.5,
  },
  description: {
    type: String,
    required: [true, "Product should have a description "],
  },
  brand: {
    type: String,
    required: [true, "Add the brand name"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
