const express = require("express");
const router = express.Router();

const Catalog = require("../../models/Catalogs");
const User = require("../../models/Users");
const Order = require("../../models/Orders");

router.get("/list-of-sellers", async (req, res) => {
  try {
    const results = await User.find({ type: "seller" }).select("-password");
    // console.log(results);
    res.json({ data: results });
  } catch (err) {
    throw err;
  }
});

router.get("/seller-catalog/:seller_id", async (req, res) => {
  try {
    let seller = req.params.seller_id;
    const results = await Catalog.find({
      seller
    }).select("-password");
    console.log(results);
    res.json({ data: results });
  } catch (err) {
    throw err;
  }
});

router.post("/create-order/:seller_id", async (req, res) => {
  const newOrder = new Order({
    buyer: req.body.buyer,
    seller: req.params.seller_id,
    products: req.body.products
  });
  try {
    await newOrder.save();
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// router.get("/orders", async (req, res) => {
//   res.json({ working: "yes" });
// });

module.exports = router;
