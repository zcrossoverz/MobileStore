const express = require("express");
const cors = require("cors");
const config = require("./app/config");
const app = express();


const setUpProductRoutes = require("./app/routes/product.router");
const setUpBrandRoutes = require("./app/routes/brand.router");

app.use(cors());
app.use(express.json());


setUpProductRoutes(app);
setUpBrandRoutes(app);

app.get("/", (req, res) => { 
    res.send({message:"hello world"});
});

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});