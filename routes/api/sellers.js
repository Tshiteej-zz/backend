const express = require("express");
const router = express.Router();

const Catalog = require("../../models/Catalogs");

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

module.exports = router;
