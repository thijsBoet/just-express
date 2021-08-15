const express = require('express')
const app = express()

const validateUser = (req, res, next) => {
    res.locals.validated = true;
    console.log("Validated Ran!")
    next();
}

app.get('/admin', validateUser)

app.get('/', (req, res, next) => {
    res.send("<h1>Main Page</h1>")
})

app.get('/admin', (req, res, next) => {
    res.send("<h1>Admin Page</h1>")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))