const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

require(`./routes.js`)(app)

const PORT = process.env.PORT || 4000
app.listen(PORT,console.log("Server running on port 4000"))