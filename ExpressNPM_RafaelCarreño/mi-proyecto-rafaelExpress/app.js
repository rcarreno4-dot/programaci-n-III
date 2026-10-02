// crear proyecto con express y node
const express = require('express');
const app = express();
const PORT = 3000;
// metodo get
app.get('/', (req, res) => {
  res.send('Hola mundo desde express','Tengo hambre', );})
// iniciar el servidor  
app.listen(PORT,() =>{console.log(`Server is running on http://localhost:${PORT}`);})
