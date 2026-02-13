import express from "express"
import * as path from "path"

const mordorRouter = express.Router()
const __dirname = path.resolve()

mordorRouter.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/mordor.html"))
})

mordorRouter.get("/sauron", (req, res) => {
    res.send("The creator of the one ring")
})

mordorRouter.get("/uruk-hai", (req, res) => {
    res.send("Meat's back on the menu boys!")
})

mordorRouter.get("/saruman", (req, res) => {
    res.send("The OG white wizard")
})

export default mordorRouter