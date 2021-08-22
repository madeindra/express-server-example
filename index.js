const express = require('express'); // import module express
const ejs = require('ejs'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan

// fungsi ini nantinya akan digunakan saat alamat / diakses
function index(req, res){
  return res.render('index');
}

// fungsi ini nantinya akan digunakan saat alamat /greet diakses
function greet(req, res){
  return res.render('greet', { name: req.query.name});
}

app.set('view engine', 'ejs');

// Ketika server diakses di alamat http://localhost:port/, jalankan fungsi helloWorld
app.get('/', index);

// Ketika server diakses di alamat http://localhost:port/greet, jalankan fungsi greet, fungsi ini mendukung penambahan ?name=tulisNama
app.get('/greet', greet);

// Ketika program dijalankan di port, jalankan fungsi onRun
app.listen(port);