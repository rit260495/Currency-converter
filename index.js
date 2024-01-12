const express = require('express')
const port = 3000;
const app = express()
const path = require('path')



app.use(express.static("public"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/views/index.html'))
})



app.listen(port, () => {
    console.log("Listening on port 3000!")
})