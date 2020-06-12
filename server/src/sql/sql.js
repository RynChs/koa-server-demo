const mysql = require('mysql');
const { database } = require('../config/config');
const SQL = require('./config_sql');

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE
})

// sql操作
const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })  
}

// 创建表
const createTable = function(sql) {
    return query(sql, []);
}

createTable(SQL.table_class);

const insertClass = (value) => query(SQL.insertClass, value);

const queryClass = () => query(SQL.queryClass);

module.exports = {
    insertClass,
    queryClass
}