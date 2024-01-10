const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: String,
  rating: String,
});

const Products = new mongoose.model("products", productSchema);

module.exports = Products;
