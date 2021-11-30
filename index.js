const express = require('express')
const app = express()

 
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/:nome', (req, res) => {
    res.send('Hello ' + req.params.nome)
  })
 
const port = 3001

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})