const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const config = require("../resource/config.json")
const path = require("path")

require("./database/mongodb")

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, "/static")))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", require("./routes/index"))
app.use("/success", require("./routes/success"))
app.use("/info", require("./routes/info"))
app.get("*", (req, res) => res.redirect("/"))

app.listen(config.port, () => console.log(`Aplicação online na porta ${config.port}`))
