const pool = require("../database");
const { BadRequestErrror } = require("../helpers/error");
const { state, wl } = require("../helpers/log");

state.set("product");


// them san pham moi

exports.add = async (req, res, next) => {
    let name = req.body.name;
    let image = req.body.image;
    let status = 0;

    if(!name || !image) return next(new BadRequestErrror(500, "[error] name or image empty!"));

    pool.execute(`SELECT COUNT(id) a FROM product WHERE name='${name}';`, (err, rows) => {
        if(rows[0].a > 0){
            wl(1, "product exists!");
            res.send({message:"exists"});
        }else{
            pool.execute(`INSERT INTO product (name, image, status) VALUES ('${name}','${image}',${status});`, (err) => {
                if(err) {
                    wl(0, err);
                    return next(new BadRequestErrror(500, "error when add new product"));
                }
                wl(2, "add new product!");
                res.send({message:"success"});
            });
        }
    });
};