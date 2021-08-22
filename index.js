const express = require('express'); // import module express
const ejs = require('ejs'); // import module ejs
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan

app.set('view engine', 'ejs'); // gunakan ejs sebagai format untuk file tampilan (view)

app.use(express.static('statics')); // gunakan middleware static untuk menyajikan file secara statik (tidak perlu membuat route), asset lokal tidak bisa digunakan tanpa ini

// fungsi ini nantinya akan digunakan saat server diakses
function homepage(req, res){
  return res.render('index');
}

// Ketika server diakses di alamat http://localhost:port/, jalankan fungsi homepage
app.get('/', homepage);

// Jalankan server di port yang sudah ditentukan
app.listen(port);