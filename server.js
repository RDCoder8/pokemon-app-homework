const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')

app.set("view engine", "jsx")
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//Index
app.get("/pokemon", (req, res) => {
    res.render('Index', {pokemon})
})

//New
app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//Show
app.get("/pokemon/:id", (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.id]} )
})

app.listen(PORT, () => {
    console.log(`I wanna be the very best port: ${PORT}`)
})