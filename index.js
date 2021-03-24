const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser'); // no need now
const port = 3000;

app.use(cors());
// app.use(bodyParser.json()); // aita deprecated instead use app.use(express.json())
app.use(express.json());

const fruits = { 'name': 'apple', 'price': 12 }
app.get('/', (req, res) => {
    res.send(fruits)
})

app.get('/banana/', (req, res) => {
    res.send('hello banana')
})

const names = ['khalid', 'mahfuz', 'safia', 'sawda'];

app.get('/users/:uid', (req, res) => {
    console.log(req.params);
    const userId = req.params.uid;
    const name = names[userId];
    res.send({ userId, name });
    console.log(req.query) //query from url ?sort=asc then at console {sort:'asc'}
})
//post

app.post('/adduser', (req, res) => {
    // console.log(JSON.stringify(req.body));
    console.log(req.body);
    res.send(req.body)
})

app.listen(port, () => {
    console.log('example app listening at', port)
})