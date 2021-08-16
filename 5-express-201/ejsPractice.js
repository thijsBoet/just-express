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

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res, next) => {
    // The data in 2nd arg (render) is appended to res.locals
    res.render("index", {
        msg: "Success!!!",
        msg2: "Failure!!!"
    })
})

app.listen(3000, () => console.log(`Listening on port 3000`))