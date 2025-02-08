const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir solicitudes desde otros dominios (CORS) si es necesario
const cors = require('cors');
app.use(cors());

// Ruta raíz (GET)
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi API' });
});

// Ruta GET para obtener un saludo personalizado
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}! Bienvenido a nuestra API` });
});

// Ruta GET para obtener una lista de productos (por ejemplo)
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
    { id: 3, nombre: 'Producto 3', precio: 200 }
  ];
  res.json({ productos: productos });
});

// Ruta GET con consulta de parámetros (por ejemplo, buscar productos por precio)
app.get('/buscar', (req, res) => {
  const { maxPrice } = req.query;
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
    { id: 3, nombre: 'Producto 3', precio: 200 }
  ];

  const productosFiltrados = productos.filter(producto => producto.precio <= maxPrice);
  res.json({ productos: productosFiltrados });
});

// Manejo de errores (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
