var mysql = require("mysql2")
var dbHost = {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "cube_coding_bootcamp"
}
var Course = require("../models/course")



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



async function getAllCourses() {
    var sql = `SELECT * FROM courses`
    let result = await conDb(sql);
    return result

}


async function insertCourse(course) {
    var sql = `INSERT INTO courses(title,stream,type,start_date,end_date) VALUES ('${course.title}','${course.stream}','${course.type}','${course.start_date}','${course.end_date}')`
    let result = await conDb(sql);
    return result
}



async function deleteCourse(id) {
    var sql = `DELETE FROM courses WHERE id=${id}`
    let result = await conDb(sql);
    return result
}

async function readCourseById(id) {
    var sql = `SELECT * FROM courses WHERE id=${id}`
    let result = await conDb(sql);
    let course = new Course(result[0].id, result[0].title, result[0].stream, result[0].type, result[0].start_date, result[0].end_date)
    // console.log(course.start_date)
    return course
}

async function updateCourse(course) {
    var sql = `UPDATE courses SET title='${course.title}',stream='${course.stream}',type='${course.type}',start_date='${course.start_date}',end_date='${course.end_date}' WHERE id=${course.id}`
    let result = await conDb(sql);
    return result

}








module.exports = { getAllCourses, insertCourse, deleteCourse, readCourseById, updateCourse }