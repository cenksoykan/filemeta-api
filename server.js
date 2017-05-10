const express = require('express')
const app = express()
const path = require('path')
const multer = require("multer")
const upload = multer()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('Example app listening on port ' + PORT) )

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) )

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
      'name': req.file.originalname,
      'size': req.file.size
  })
})
