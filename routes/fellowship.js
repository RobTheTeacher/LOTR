import express from "express"
import * as path from "path"

const fellowshipRouter = express.Router()
const __dirname = path.resolve()

fellowshipRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/fellowship.html"))
})

fellowshipRouter.get('/gandalf', (req,res) => {
    res.send("<h1>Mithrandir is Gandalf's Maier name</h1>")
})

fellowshipRouter.get('/aragorn', (req,res) => {
    res.send("<h1>Aragorn is a strider and a secret king</h1>")
})

fellowshipRouter.get('/gimli', (req,res) => {
    res.send("<h1>Gimli is dwarf from Moria</h1>")
})

fellowshipRouter.get('/legolas', (req,res) => {
    res.send("<h1>Legolas is a elf from Lothlorien </h1>")
})

fellowshipRouter.get('/boromir', (req,res) => {
    res.send("<h1>Boromir is a man from Minas Tirith</h1>")
})

fellowshipRouter.get('/pippin', (req,res) => {
    res.send("<h1>Pippin is a fool of a took </h1>")
})

fellowshipRouter.get('/merry', (req,res) => {
    res.send("<h1>Merry is Pippin's best friend</h1>")
})

fellowshipRouter.get('/sam', (req,res) => {
    res.send("<h1>Sam is our hero!</h1>")
})

fellowshipRouter.get('/frodo', (req,res) => {
    res.send("<h1>Frodo is the ring bearer</h1>")
})

export default fellowshipRouter