var mysql = require("mysql2");
var dbHost = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "cube_coding_bootcamp"
}
var Trainer = require("../models/trainer")



async function conDb(sql) {
    var con = mysql.createConnection(dbHost)
    let promise = new Promise((resolve, reject) => {
        con.connect(function (error) {
            if (error) throw error;
            console.log("You Are Connected With My Sql Server")
            con.query(sql, function (err, result, fields) {
                if (err) throw err
                console.log(result)
                resolve(result)
            })
            con.end(function (ee) {
                if (ee) throw ee
                console.log("Connection Ended")
            })
        })
    })
    let result = await promise
    return result
}



async function addAllTrainers() {
    var sql = `SELECT * FROM trainers`
    let result = await conDb(sql)
    return result
}




async function insertTrainer(trainer) {
    var sql = `INSERT INTO trainers(first_name,last_name,subject) VALUES('${trainer.first_name}','${trainer.last_name}','${trainer.subject}');`
    let result = await conDb(sql)
    return result
}



async function deleteTrainer(id) {
    var sql = `DELETE FROM trainers WHERE id=${id};`
    let result = await conDb(sql)
    return result
}



async function readTrainerById(id) {
    var sql = `SELECT * FROM trainers WHERE id=${id};`
    let result = await conDb(sql)
    let trainer = new Trainer(result[0].id, result[0].first_name, result[0].last_name, result[0].subject)
    return trainer
}



async function updateTrainer(trainer) {
    var sql = `UPDATE trainers SET first_name='${trainer.first_name}',last_name='${trainer.last_name}',subject='${trainer.subject}' WHERE id=${trainer.id}`
    let result = await conDb(sql)
    return result
}








module.exports = { addAllTrainers, insertTrainer, deleteTrainer, readTrainerById, updateTrainer }