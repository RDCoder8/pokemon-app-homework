const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

app.listen(PORT, () => {
    console.log(`I wanna be the very best port: ${PORT}`)
})