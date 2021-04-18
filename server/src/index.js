const express = require("express")

const app = express();

const port = process.env.PORT || 1337

app.get("/", (req , res) => {
    res.send("<h1>HELLO WORLD</h1>")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})