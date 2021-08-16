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
    // The data in 2nd arg (render) is appended to res.locals
    res.render("index", {
        countries: [
            {
                name: `Russia`,
                capital: `Moscow`,
                western: false
            },
            {
                name: `England`,
                capital: `London`,
                western: true
            }
        ],
        msg: `Failure!!!`,
        msg2: `Success!!!`,
        html: `<p><img src="https://tracks-trails.com/wp-content/uploads/2019/09/Yosemite-National-Park.jpg" alt="" /></p>`
    })
})

app.listen(3000, () => console.log(`Listening on port 3000`))