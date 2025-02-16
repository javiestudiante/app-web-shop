require('dotenv').config();

const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("Error: MONGO_URI no está definido en .env");
    process.exit(1);
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

module.exports = mongoose;