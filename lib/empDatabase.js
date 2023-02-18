const mysql = require ("mysql2");
require('dotenv').config();

// create
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  });

    connection.query () {
        return new Promise((resolve) => {
            this.connection.query((err, rows) => {
                if(err) {
                    console.error(err);
                    return(err);
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