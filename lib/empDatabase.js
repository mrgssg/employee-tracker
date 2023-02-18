const mysql = require ("mysql2");
require('dotenv').config()

// create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  });

    connection.query (sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query( sql, args, (err, rows) => {
                if(err) {
                    console.error(err.sql);
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
    
    // close db connection
    close() {
        return new Promise((res, ) => {
            this.connection.end(err => {
                if (err)
                return (err);
                res();
            });
        });
    }


module.exports = empDatabase