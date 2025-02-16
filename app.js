require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const express = require('express');
require('./src/config/db');
const routes = require('./src/routes/index');
const path = require('path');

const app = express();
app.use(express.json());
app.use('/api', routes);
app.use(express.static('public')); // utiliza archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:5500');
});
