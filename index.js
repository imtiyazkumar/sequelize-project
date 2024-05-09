const express = require('express')
const bodyParser = require('body-parser')
require('./models/index')


const userController = require('./controllers/userController');

const app = express()
app.use(bodyParser.json())

const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/add', userController.addUser);


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:3000/`)
})
