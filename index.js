const express = require("express");
const router = express.Router();

// const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connect = require("./config/connect");

const buyer = require("./routes/api/buyers");
const seller = require("./routes/api/sellers");
const auth = require("./routes/api/users");
connect();

const app = express();

app.use(bodyParser.json());
console.log("Run");

app.use("/api/buyer", buyer);
app.use("/api/seller", seller);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
