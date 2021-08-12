const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

app.all("*", (req, res) => {
    // Express handles basic headers
    res.send("<h1>This is my Home Page!</h1>")
    // Express handles the end command
})

app.get('/', (req, res) => {
    res.send('Get request to homepage')
})

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))