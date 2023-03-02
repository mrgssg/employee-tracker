const mysql = require ("mysql2");
require('dotenv').config();

// create
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
    password: "Linco!n1"
  });

connection.connect(err => {
    if (err) throw err
})
module.exports = connection