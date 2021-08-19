const express = require('express'); // import module express
const app = express(); // jalankan fungsi untuk inisiasi express

const port = 3000; // port yang akan digunakan

// fungsi ini nantinya akan digunakan saat server diakses
function helloWorld(req, res){
  return res.send('Hello world');
}

// fungsi ini nantinya akan digunakan saat program pertama kali dijalankan
function onRun(){
  console.log(`Server is running on http://localhost:${port}`);
}

// Ketika server diakses di alamat http://localhost:port/, jalankan fungsi helloWorld
app.get('/', helloWorld);

// Ketika program dijalankan di port, jalankan fungsi onRun
app.listen(port, onRun);