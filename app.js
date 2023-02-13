const express = require("express");
const bodyparser = require("body-parser");
const productRouter = require("./routes/productRoute");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const url =
  process.env.dbURL ||
  "mongodb+srv://astream26:26022999@cluster0.tbsdavx.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json({ limit: "10kb" }));

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("connection created....");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/product", productRouter);

const port = 3000;

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});
