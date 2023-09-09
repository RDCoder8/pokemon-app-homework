require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Pokemon = require('./models/pokemon')
const mongoose = require('mongoose')

////////Database Collection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once("open", ()=>{
    console.log("Linking to Pokedex!")
})
////////////////////////

///Engine
app.set("view engine", "jsx")
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

//Middleware
app.use(express.urlencoded({extended: false}))

////////////Pokemon Express App
//Home Page
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//Index
app.get("/pokemon", async (req, res) => {
    try {
        const foundAllPokemon = await Pokemon.find({})
        res.status(200).render('Index', {pokemon: foundAllPokemon})
    } catch (error) {
        res.status(418).send(error)
    }
})

//New
app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//Delete

//Update

//Create
app.post('/pokemon', async (req, res) => {
    try {
        const createdPokemon = await Pokemon.create(req.body)
        res.status(201).send(createdPokemon)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Edit

//Show
app.get("/pokemon/:id", async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Show', {pokemon: foundPokemon})
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`I wanna be the very best port: ${PORT}`)
})