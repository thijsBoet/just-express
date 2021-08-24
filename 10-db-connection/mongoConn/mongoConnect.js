const express = require("express")
const app = express();

const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const mongoUrl = `mongodb://localhost:27017`

let db;

mongoClient.connect(mongoUrl, (error, databaseConn) => {
    db = databaseConn.db("electricOrNot")
    
})

app.get("/", (req, res) => {
    db.collection("cars").find({}).toArray((queryError, carsResult) => {
        console.log(carsResult)
        res.json(carsResult)
    })
})

app.listen(3000)