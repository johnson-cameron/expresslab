"use strict";
const express = require("express");
const cartRouter = express.Router();

const cart = [
  {
    product: "Tshirt",
    price: "15.00",
    quantity: "3",
    id: 0
  },
  {
    product: "Shoes",
    price: "80.00",
    quantity: "1",
    id: 1
  },
  {
    product: "Pants",
    price: "35.00",
    quantity: "1",
    id: 2
  }
];

let idCount = 3;

cartRouter.get("/cart", (req, res) => {
  console.log(cart);
  res.send(cart);
});

cartRouter.post("/cart", (req, res) => {
  console.log(cart);
  res.send(cart);
});

cartRouter.delete("/cart/:id", (req, res) => {
  console.log(req.params.id);
  console.log(cart);
  res.send(cart);
});


cartRouter.put("/cart/:id", (req, res) => {
  console.log(req.params.id);
  console.log(cart);
  res.send(cart);
});


module.exports = cartRouter;