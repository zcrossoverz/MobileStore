const order = require("../controllers/order.controller");
const express = require("express");

module.exports = (app) => {
    let router = express.Router();

    router.get("/add", order.add);
    
    app.use("/api/order", order);
}