var mysql = require("mysql2")
const dbHost = require("../credentials/credentials.js")
var Student = require("../models/student")


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




async function getAllStudents() {
    var sql = `SELECT * FROM students`
    let result = await conDb(sql)
    return result
}


async function insertStudent(student) {
    // var sql = `INSERT INTO students(first_name,Last_name,date_of_birth,tuition_fees) VALUES ('${student.first_name}','${student.Last_name}',STR_TO_DATE('${student.date_of_birth}',"%m-%d-%y"),${student.tuition_fees});`
    var sql = `INSERT INTO students(first_name,Last_name,date_of_birth,tuition_fees) VALUES ('${student.first_name}','${student.Last_name}','${student.date_of_birth}',${student.tuition_fees});`
    let result = await conDb(sql)
    return result
}


async function deleteStudent(id) {
    var sql = `DELETE FROM students WHERE id=${id};`
    let result = await conDb(sql)
    return result
}

async function readStudentById(id) {
    var sql = `SELECT * FROM students WHERE id=${id}`
    let result = await conDb(sql)
    let student = new Student(result[0].id, result[0].first_name, result[0].Last_name, result[0].date_of_birth, result[0].tuition_fees)
    return student
}


async function updateStudent(student) {
    var sql = `UPDATE students SET first_name='${student.first_name}',Last_name='${student.Last_name}',date_of_birth='${student.date_of_birth}',tuition_fees=${student.tuition_fees} WHERE id=${student.id}`
    let result = await conDb(sql)
    return result
}





module.exports = { getAllStudents, insertStudent, deleteStudent, readStudentById, updateStudent }