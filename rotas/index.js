const express = require('express');
const router = express.Router();
require('../mongoDB/mongoconn')

const empresasFornecedoras = require('./empresasFornecedoras');
const empresasConsumidoras = require('./empresasConsumidoras');

router.use('/empresasConsumidoras', empresasConsumidoras);
router.use('/empresasFornecedoras', empresasFornecedoras);


router.get('/', (req, res) => {
  // Sua lógica de rota aqui
  res.json({
    success: false,
    message: "Este é um acesso reservado!!!" 
    })
});

module.exports = router;