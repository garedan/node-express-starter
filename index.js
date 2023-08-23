// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/', (req, res)=>{
  res.send("Mi tienda en express");
});

app.get('/otraRuta', (req, res)=>{
  res.send("Mi otra tienda en express");
});

app.get('/:id', (req, res)=>{
  res.send(`Mi tienda en express (ruta es = a endpoint) número ${req.params.id}`);
});

app.get('/json/:id', (req, res)=>{
  res.json({
    id:req.params.id,
    producto: req.params,
    precio:1
  });
});

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("Mi port " + port);
});
