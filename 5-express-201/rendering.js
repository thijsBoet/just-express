const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res, next) => {
    res.render("index")
})

app.listen(3000, () => console.log(`Listening on port 3000`))