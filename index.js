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

app.post('/add', userController.addUser);

app.get('/get/:id', userController.getUser);

app.get('/get-all', userController.getUsers);

app.delete('/delete/:id', userController.deleteUser);

app.patch('/update/:id', userController.updateUser);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:3000/`)
})
