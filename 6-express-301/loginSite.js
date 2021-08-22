const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const helmet = require('helmet');
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use((req, res, next) => {
    if (req.query.msg === "fail") {
        res.locals.msg = `Sorry. This username and password combination does not exist!`
    } else {
        res.locals.msg = ``
    }
    next();
})

app.get("/", (req, res, next) => {
    res.send(`Sanity Check!`)
})

app.get("/login", (req, res, next) => {
    res.render(`login`)
})

app.post(`/process_login`, (req, res, next) => {
    const password = req.body.password;
    const username = req.body.username;

    if (password === `x`) {
        res.cookie(`username`, username);
        res.redirect(`/welcome`)
    } else {
        res.redirect(`/login?msg=fail&test=hello`)
    }
})

app.get("/welcome", (req, res, next) => {
    res.render(`Welcome`, {
        username: req.cookies.username
    })
})

app.param("storyId", (req, res, next, id) => {
    console.log(id);
    next();
})

app.get("/story/:storyId", (req, res, next) => {
    res.send(`<h1>Story ${req.params.storyId}</h1>`)
})

app.get('/statement', (req, res, next) => {
    res.download(path.join(__dirname, 'userStatements/BankStatementChequing.png'), "Your-personal-bank-statement.png", (error) => {
        if (error) {
            if (!res.headersSent) {
                res.redirect("/download/error")
            }
        }
    })
})

app.get("/logout", (req, res, next) => {
    res.clearCookie(`username`)
    res.redirect("/login")
})

app.listen(3000, () => console.log(`Listening on port 3000`))