const product = require("../controllers/product.controller");
const express = require("express");

module.exports = (app) => {
    let router = express.Router();

    router.post("/add", product.add);

    app.use("/api/product", router);
}