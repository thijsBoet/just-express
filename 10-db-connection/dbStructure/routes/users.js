var express = require('express');
var router = express.Router();
const db = require('../database/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = "SELECT * FROM city_weathers";
  db.query(query, (error, dbResponse) => {
    console.log(dbResponse.rows);
    res.json(dbResponse.rows)
  })
  db.end();
});

module.exports = router;
