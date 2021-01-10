const express = require("express");
const router = express.Router();

// const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connect = require("./config/connect");

// const buyer = require("./routes/api/buyer");
const seller = require("./routes/api/sellers");

connect();

const app = express();

app.use(bodyParser.json());
console.log("Run");

// app.use("/api/buyer", buyer);
app.use("/api/seller", seller);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
