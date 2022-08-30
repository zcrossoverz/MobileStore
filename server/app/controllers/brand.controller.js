const pool = require("../database");


// them brand moi 

let add = (req, res) => {
    let name = req.body.name;
    if(!name) return res.send({error:1});
    pool.execute(`SELECT COUNT(id) a FROM brand WHERE name='${name}';`, (err, rows) => {
        if(rows[0].a > 0) return res.send({message:"exists"});
        pool.execute(`INSERT INTO brand (name) VALUES ('${name}');`, (err) => {
            if(err) return res.send({error:2});
            res.send({message:"success"});
        });
    });
};

// update thong tin brand

let update = (req, res) => {
    let name = req.body.name;
    if(!name) return res.send({error:1});
    pool.execute(`SELECT COUNT(id) a FROM brand WHERE name='${name}';`, (err, rows) => {
        if(rows[0].a > 0) return res.send({message:"exists"});
        pool.execute(`UPDATE brand SET name='${name}' WHERE id='${req.params.id}';`, (err) => {
            if(err) return res.send({error:2});
            res.send({message:"success"});
        });
    });
};

// delete brand

let delete_brand = (req, res) => {
    let id = req.params.id;
    if(!id) return res.send({error:1});
    pool.execute(`DELETE FROM brand WHERE id=${id};`, (err) => {
        if(err) return res.send({error:2});
        res.send({message:"success"});
    });
}


module.exports = {
    add, update, delete:delete_brand
};