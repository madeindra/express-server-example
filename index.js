const express = require('express'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan


function helloWorld(req, res){
  res.send('Hello World');
}

function getProducts(req, res){
  const data = ['Apple', 'Redmi', 'One Plus'];
  
  res.json(data);
}

function getOrders(req, res){
  const data = { id: 1, paid: false, user_id: 1 };
  
  res.json(data);
}


// Request ke http://localhost:3000/ akan diarahkan ke handler helloWorld
app.get('/', helloWorld);

// Request ke http://localhost:3000/products akan diarahkan ke handler getProducts
app.get('/products', getProducts);

// Request ke http://localhost:3000/orders akan diarahkan ke handler getOrders
app.get('/orders', getOrders);

app.listen(port);