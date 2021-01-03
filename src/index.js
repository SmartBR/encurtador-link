const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const config = require("../resource/config.json")
const fs = require("fs")
const path = require("path")

const https = require("https")
const http = require("http")

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

const httpServer = http.createServer(app)
const httpsServer = https.createServer({
    key: fs.readFileSync("/etc/ssl/key.pem", "utf8"),
    cert: fs.readFileSync("/etc/ssl/cert.pem", "utf8")
}, app)

httpServer.listen(8080, () => {
    console.log("HTTP server listening on port 8080")
})

httpsServer.listen(80, () => {
    console.log("HTTPS server listening on port 80")
})


//app.listen(config.port, () => console.log("Aplicação online!"))