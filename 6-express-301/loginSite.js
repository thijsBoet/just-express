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

app.get("/login", (req, res, next) => {
    res.render(`login`)
})

app.post(`/process_login`, (req, res, next) => {
    const password = req.body.password;
    const username = req.body.username;

    if (password === `x`) {
        res.cookie(`username`, username);
        res.redirect(`/welcome`)
    }
})

app.get("/welcome", (req, res, next) => {
    res.send(`Welcome`)
})

app.get('/', (req, res, next) => {
    // The data in 2nd arg (render) is appended to res.locals
    res.render("index", {

    })
})

app.listen(3000, () => console.log(`Listening on port 3000`))