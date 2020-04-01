const express = require('express')
const app = express()
const port = 5700

const fs = require('fs');

let data = fs.readFileSync('Order.json');  
let order = JSON.parse(data);  

app.get('/orders/1', (req, res) => res.send(JSON.stringify(order)));

app.use(express.static('public'));

app.listen(port, () => console.log(`Order Service is running on ${port}!`));