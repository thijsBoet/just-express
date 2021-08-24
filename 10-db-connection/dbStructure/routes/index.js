var express = require('express');
var router = express.Router();
const db = require('../database/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  const query = "SELECT * FROM city_weathers WHERE id > $1";
  const scaryDataFromInternet = 36
  db.query(query, [scaryDataFromInternet], (error, dbResponse) => {
    console.log(dbResponse.rows);
    res.json(dbResponse.rows)
  })
  db.end();
});

/* GET home page. */
router.get('/cities', function(req, res, next) {
  const query = "SELECT * FROM city_weathers WHERE id <= $1";
  const scaryDataFromInternet = 36
  db.query(query, [scaryDataFromInternet], (error, dbResponse) => {
    console.log(dbResponse.rows);
    res.json(dbResponse.rows)
  })
  db.end();
});

module.exports = router;
