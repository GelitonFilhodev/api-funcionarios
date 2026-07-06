const express = require("express")
const routes = require("./routes/funcionarioRouter")
const sequelize = require("./config/database")

const app = express()

app.use(express.json())
app.use(routes)

sequelize.sync()

module.exports = app