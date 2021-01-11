const express = require("express");
const router = express.Router();

const Catalog = require("../../models/Catalogs");
const Order = require("../../models/Orders");

router.get("/", (req, res) => {
  res.json({ msg: "Running" });
});

router.post("/create-catalog", async (req, res) => {
  const newCatalog = new Catalog({
    name: req.body.name,
    seller: req.body.seller,
    products: req.body.products
  });
  try {
    await newCatalog.save();
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const results = await Order.find({});
    // console.log(results);
    res.json({ data: results });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
