
// src/server.js

// Importa los módulos necesarios
const express = require('express');
const cors = require('cors');

// Crea una instancia de la aplicación Express
const app = express();

// Habilitar CORS para todas las rutas y orígenes (Cualquier origen puede acceder)
app.use(cors());  // Esto permitirá solicitudes desde cualquier origen

// Si quieres limitar el acceso a ciertos dominios, puedes configurar CORS como sigue:
// app.use(cors({
//   origin: 'http://localhost:3000' // Solo permitirá solicitudes desde este dominio
// }));

// Definir tus rutas
app.get('/api/register', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

// Configura el puerto en el que quieres que corra el servidor
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://192.168.1.87:${PORT}`);
});