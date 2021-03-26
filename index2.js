const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(express.json()); //body-parser is not needed now
app.use(cors()); //cors error resolved

app.listen(port,()=>{
    console.log('i am listening at port 4000');
})

//get api
const fruits = { 'name': 'apple', 'price': 12 };
app.get('/',(req,res)=>{
   res.send(fruits);
});

app.get('/banana/',(req,res)=>{
    // res.send({name:'hello bananas'})
    res.send("<p>hello bananas</p>")
})
app.get('/fr/:name',(req,res)=>{
    console.log(req.params);
    res.send('dd');
})

//post api
app.post('/addUser/',(req,res)=>{
    const bodys = req.body;
    //console.log(bodys);
    res.send(bodys)
})

//put api