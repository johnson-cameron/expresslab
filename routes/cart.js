"use strict";
const express = require("express");
const cartRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");

cartRouter.get("/shopping-cart", (req, res) => {
  pool.query("SELECT * FROM cart ORDER BY id").then((result) => {
    res.send(result.rows);

  });
});

cartRouter.post("/shopping-cart", (req, res) => {
  pool.query("INSERT INTO cart(product, price, quantity) VALUES($1::text, $2::text, $3::text)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    pool.query("SELECT * FROM cart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

cartRouter.delete("/shopping-cart/:id", (req, res) => {
  pool.query("DELETE FROM cart WHERE id=$1::int", [req.params.id]).then(() => {
    pool.query("SELECT * FROM cart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

cartRouter.put("/shopping-cart/:id", (req, res) => {
  pool.query("UPDATE cart SET product=$1::text, price=$2::text, quantity=$3::text WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
    pool.query("SELECT * FROM cart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

module.exports = cartRouter;