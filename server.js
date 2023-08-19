const express = require("express")
const app = express()
const port  = process.env.PORT || 30000


app.listen(port, () => {
    console.log("server connected successfully")
})