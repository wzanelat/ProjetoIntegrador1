const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const empresasConsumidorasSchema = new Schema({
    CNPJ: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true, default: function(){return slug(this.CNPJ)}},
    nome: {type: String, required: true},
    Peso_Disponivel_kg: {type: Number, required: true}
})

module.exports = mongoose.model('empresasConsumidoras', empresasConsumidorasSchema)