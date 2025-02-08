// Importar express
const express = require('express');

// Crear una instancia de express
const app = express();

// Definir la ruta principal
app.get('/', (req, res) => {
  res.send('HOLA MUNDO');
});

// Definir el puerto de escucha
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
