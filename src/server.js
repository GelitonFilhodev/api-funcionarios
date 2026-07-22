require("dotenv").config()
const app = require("./app")
const sequelize = require("./config/database")


const PORT = 3002


//sincroniza tabelas automaticamente
sequelize.sync()


app.listen(PORT,()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})