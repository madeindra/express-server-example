// index.js

const express = require('express'); // import module express
const ejs = require('ejs'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const users = []; // siapkan array kosong untuk menampung data user

const port = 3000; // port yang akan digunakan

app.use(express.urlencoded({ extended: false })); // middleware untuk membaca request body dari form
app.set('view engine', 'ejs'); // middleware untuk me-render file ejs

// fungsi ini nantinya akan digunakan saat mengkases alamat /
function getUser(req, res){
  res.json({
    jumlahUser: users.length,
    data: users 
  });
}

// fungsi ini nantinya akan digunakan saat mengkases alamat /register dengan method GET
function getRegister(req, res){
  return res.render('register');
}

// fungsi ini nantinya akan digunakan saat mengakses alamat /register dengan method POST
function postRegister(req, res){
  // tambahan data ke array users
  users.push({
    email: req.body.email,
    password: req.body.password
  });

  // setelah itu, alihkan user ke alamat /
  res.redirect('/');
}

// Ketika mengakses alamat http://localhost:port/ dengan method GET, jalankan fungsi getUser
app.get('/', getUser);

// Ketika mengakses alamat http://localhost:port/register dengan method GET, jalankan fungsi getRegister
app.get('/register', getRegister);

// Ketika mengakses alamat http://localhost:port/register dengan method POST, jalankan fungsi postRegister
app.post('/register', postRegister);

// Ketika program dijalankan di port, jalankan fungsi onRun
app.listen(port);