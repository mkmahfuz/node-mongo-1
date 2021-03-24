const express = require('express');
const app = express();
const port = 3000;

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
    res.send({userId,name});
    console.log(req.query) //query from url ?sort=asc then at console {sort:'asc'}
})

app.listen(port, () => {
    console.log('example app listening at', port)
})