const express = require('express'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan

app.use(express.json()); // menggunakan middleware json untuk membaca body berformat json

// fungsi ini nantinya akan digunakan saat program pertama kali dijalankan
function onRun(){
  console.log(`Server is running on http://localhost:${port}`);
}

// handler untuk /users ketika menggunakan method GET
function getUser(req, res){
  res.status(200);
  res.send('Anda mengakses /users dengan method GET');
}

// handler untuk /users ketika menggunakan method POST
function postUser(req, res){
  res.status(200);
  res.send('Anda mengakses /users dengan method POST');
}

// handler untuk /users ketika menggunakan method PUT
function putUser(req, res){
  res.status(200);
  res.send('Anda mengakses /users dengan method PUT');
}

// handler untuk /users ketika menggunakan method DELETE
function deleteUser(req, res){
  res.status(200);
  res.send('Anda mengakses /users dengan method DELETE');
}


// route untuk user dengan 4 methods
app.get('/users', getUser);
app.post('/users', postUser);
app.put('/users', putUser);
app.delete('/users', deleteUser);

// Ketika program dijalankan di port, jalankan fungsi onRun
app.listen(port, onRun);