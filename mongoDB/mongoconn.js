const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => {
        console.log("Conectado");
    })
    .catch((err) => {
        console.error('Erro ao conectar:', err);
    });
