const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

// Configuración de opciones de conexión
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tls: true,
    tlsAllowInvalidCertificates: true // Solo para desarrollo, no usar en producción
};

mongoose.connect('mongodb+srv://hansolavet:AvlaW6BVwcp9AdP7@api01.0j5gidv.mongodb.net/post?retryWrites=true&w=majority&appName=Api01', options);

const connection = mongoose.connection;
connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
});

connection.once('open', () => {
    console.log('Conexión a la base de datos establecida en MongoDB');
});

// Configuración del servidor
const port = process.env.PORT || 15000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});