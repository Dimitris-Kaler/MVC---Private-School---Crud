var mysql = require("mysql2")
const dbHost = require("../credentials/credentials.js")
const Assignment = require("../models/assignment")
// var dbHost = {
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "cube_coding_bootcamp",
//     dateStrings: true
// }


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






async function getAllAssignments() {
    var sql = `SELECT * FROM assignments`
    let result = await conDb(sql)
    return result
}



async function insertAssignment(assignment) {
    var sql = `INSERT INTO assignments (title,description,max_oral_mark,max_total_mark,sub_date_time) VALUES ('${assignment.title}','${assignment.description}',${assignment.max_oral_mark},${assignment.max_total_mark},'${assignment.sub_date_time}')`
    let result = await conDb(sql)
    return result
}


async function deleteAssignment(id) {
    var sql = `DELETE FROM assignments WHERE id=${id};`
    let result = await conDb(sql)
    return result
}





async function readAssignmentBy(id) {
    var sql = `SELECT * FROM assignments WHERE id=${id}`
    let result = await conDb(sql)
    let assignment = new Assignment(result[0].id, result[0].title, result[0].description, result[0].max_oral_mark, result[0].max_total_mark, result[0].sub_date_time)
    return assignment
}




async function updateAssignment(assignment) {
    var sql = `UPDATE assignments SET title='${assignment.title}',description='${assignment.description}',max_oral_mark='${assignment.max_oral_mark}',max_total_mark='${assignment.max_total_mark}',sub_date_time='${assignment.sub_date_time}' WHERE id=${assignment.id}`
    let result = await conDb(sql)
    return result
}









module.exports = { getAllAssignments, insertAssignment, deleteAssignment, readAssignmentBy, updateAssignment }