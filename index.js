import express from "express"
import fellowshipRouter from "./routes/fellowship.js"
import mordorRouter from "./routes/mordor.js"
import * as path from "path"

const app = express()
const port = 3003
const __dirname = path.resolve()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.use("/fellowship", fellowshipRouter)

app.use("/mordor", mordorRouter)

app.listen(port, () => console.log(`Traveling over the misty mountains from port ${port}`))