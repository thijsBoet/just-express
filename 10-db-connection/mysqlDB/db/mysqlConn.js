var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'x',
    password: 'x',
    database: 'todo'
});

module.exports = {
    query: (queryText, params, callback) => {
        return pool.query(queryText, params, callback);
    }
}


// const dataFromScaryInternet = 3
// pool.query('SELECT * FROM tasks WHERE id >?', [dataFromScaryInternet], (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
// });