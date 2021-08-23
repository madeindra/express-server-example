const express = require('express'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan

app.use(express.json()); // menggunakan middleware json untuk membaca body berformat json

// fungsi ini nantinya akan digunakan saat program pertama kali dijalankan
function onRun(){
  console.log(`Server is running on http://localhost:${port}`);
}

// handler untuk /user ketika menggunakan method GET
function getUser(req, res){
  res.status(200);
  res.send('Anda mengakses /user dengan method GET');
}

// handler untuk /user ketika menggunakan method POST
function postUser(req, res){
  res.status(200);
  res.send('Anda mengakses /user dengan method POST');
}

// handler untuk /user ketika menggunakan method PUT
function putUser(req, res){
  res.status(200);
  res.send('Anda mengakses /user dengan method PUT');
}

// handler untuk /user ketika menggunakan method DELETE
function deleteUser(req, res){
  res.status(200);
  res.send('Anda mengakses /user dengan method DELETE');
}


// route untuk user dengan 4 methods
app.get('/user', getUser);
app.post('/user', postUser);
app.put('/user', putUser);
app.delete('/user', deleteUser);

// Ketika program dijalankan di port, jalankan fungsi onRun
app.listen(port, onRun);