const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
