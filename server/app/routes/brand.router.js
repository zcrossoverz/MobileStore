const brand = require("../controllers/brand.controller");
const express = require("express");

module.exports = (app) => {

    let router = express.Router();

    router.post("/add", brand.add);
    router.put("/:id", brand.update);
    router.delete("/:id", brand.delete);

    app.use("/api/brand", router);
}