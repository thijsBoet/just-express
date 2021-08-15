const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send("Test")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))