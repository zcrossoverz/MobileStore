const pool = require("../database");
const { getCurrentTime } = require("../helpers/time");

let add = (req, res) => {
    let id = req.body.id;
    let type = req.body.type;
    let user_id = req.body.user_id;
    let status = 0; // status thnah toan
    let time = getCurrentTime();

    pool.execute(`INSERT INTO orders (id, type, user_id, status, time) VALUES (${id}, ${type}, ${user_id}, ${status}, '${time}');`, (err) => {
        if(err) return res.send({error:2});
        res.send({message:"success"});
    });
};

let update = () => {

};

let deletez = () => {

};


module.exports = {
    add, update, delete: deletez
};