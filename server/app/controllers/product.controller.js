const pool = require("../database");
const { state, wl } = require("../helpers/log");

state.set("product");


// them san pham moi

let add = (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let brand_id = req.body.brand_id;
    let status = 0;

    if(!name || !image || !brand_id) return res.send({error:1});

    pool.execute(`SELECT COUNT(id) a FROM product WHERE name='${name}';`, (err, rows) => {
        if(rows[0].a > 0){
            wl(1, "product exists!");
            res.send({message:"exists"});
        }else{
            pool.execute(`INSERT INTO product (name, image, status, brand_id) VALUES ('${name}','${image}',${status}, ${brand_id});`, (err) => {
                if(err) {
                    wl(0, err);
                    return res.send({error:2, detail: err});
                }
                wl(2, "add new product!");
                res.send({message:"success"});
            });
        }
    });
};


// them options cho san pham

let add_detail = (req, res) => {
    let product_id = req.body.product_id;
    let body = req.body.body;
    let display = req.body.display;
    let platform = req.body.platform;
    let memory = req.body.memory;
    let main_camera = req.body.main_camera;
    let selfie_camera = req.body.selfie_camera;
    let sound = req.body.sound;
    let feature = req.body.feature;
    let battery = req.body.battery;

    if(!product_id || !body || !display || !platform) return res.send({error:1});

    pool.execute(`SELECT COUNT(product_id) a FROM product_detail WHERE product_id=${product_id};`, (err, rows) => {
        if(rows[0].a > 0){
            res.send({message:"exists"});
        }else{
            pool.execute(`INSERT INTO product_detail (product_id, body, display, platform, memory, main_camera, selfie_camera, sound, feature, battery) VALUES (${product_id}, '${body}', '${display}', '${platform}', '${memory}', '${main_camera}', '${selfie_camera}', '${sound}', '${feature}', '${battery}');`, (err) => {
                if(err) return res.send({error:2});
                res.send({message:"success"});
            });
        }
    });
}


// them image cho product


let add_image = (req, res) => {
    let product_id = req.body.product_id;
    let url = req.body.url;

    if(!url || !product_id) return res.send({error:1});
    pool.execute(`INSERT INTO product_image (product_id, url) VALUES (${product_id}, '${url}')`, (err) => {
        if(err) return res.send({error:2});
        res.send({message:"success"});
    });

}

// them option

let add_option = (req, res) => {
    let product_id = req.body.product_id;
    let detail = req.body.detail;
    let price = req.body.price;
    let price_import = req.body.price_import;

    if(!product_id || !detail || !price || !price_import) return res.send({error:1});
    pool.execute(`INSERT INTO options (product_id, detail, price, price_import) VALUES (${product_id}, '${detail}', ${price}, ${price_import})`, (err) => {
        if(err) return res.send({error:2});
        res.send({message:"success"});
    });

}

module.exports = {
    add, add_detail, add_image, add_option
};