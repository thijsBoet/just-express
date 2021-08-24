var express = require('express');
var router = express.Router();
const mysqlDB = require('../db/mysqlConn');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const queryText = 'SELECT * FROM tasks WHERE id > ? AND taskName = ?'
  mysqlDB.query(queryText, [3, "Watch Thor"], (error, results) => {
    console.log(results)
    res.json(results)
  })
});

module.exports = router;
