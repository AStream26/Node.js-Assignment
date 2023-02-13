const Product = require("../modal/productModal");

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    console.log(req.body);
    const products = await Product.find();

    res.status(201).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    console.log(req.params);
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      throw new Error("Product not found !!");
    }

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      throw new Error("Product not found !!");
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};
