const express = require("express")
const cookieSession = require("cookie-session")
const bodyParser = require("body-parser")
const passport = require("passport")
const moment = require("moment")

const { Strategy } = require("passport-local")

const app = express()
const port = process.env.PORT || 3000
const appType = process.env.NODE_ENV == "production" ? "Application" : "Backend"

app.use(bodyParser.json())
app.use(express.static("./dist"))

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./dist" })
})

app.listen(port, () => console.info(`${appType} ready at http://localhost:${port}`))