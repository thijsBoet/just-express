const path = require("path");

const express = require("express");
const app = express();

// Mounts middleware
app.use(express.static('public'))

// .all RESPONDS to all REQUESTS
// app.all("/", (req, res) => res.send(`<h1>Welcome to the homepage</h1>`))
console.log(__dirname + "/node.html")
app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/node.html")));
app.post("/", (req, res) => res.send(`<h1>Welcome to the home POST page</h1>`));
app.delete("/", (req, res) => res.send(`<h1>Welcome to the home DELETE page</h1>`));
app.put("/", (req, res) => res.send(`<h1>Welcome to the home PUT page</h1>`));

app.all("*", (req, res) => res.send(`<h1>This is not the page your looking for!</h1>`))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port: ${PORT}`));