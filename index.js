const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3200
const publicDirectoryPath = path.join(__dirname, '../app')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
