const express = require('express');
const router = express.Router();
const Empresa = require('../model/EmpresasConsumidoras')


router.get('/', async (req, res) => {
    try{
        const listaEmpresasConsumidoras = await Empresa.find()
        res.json({
            success: true,
            message: listaEmpresasConsumidoras
        })
    }catch{
        res.json({
            success: false,
            message: "Não foi possível listar as Empresas Consumidoras"
        })
    }   
})

router.post('/', async (req,res)=>{
    const novaEmpresaConsumidora = new Empresa({
        CNPJ: req.body.CNPJ,
        nome: req.body.nome,
        Peso_Disponivel_kg: req.body.Peso_Disponivel_kg
    })
    try{
        const saveNovaEmpresaConsumidora = await novaEmpresaConsumidora.save()
        res.json({
            success: true,
            message: saveNovaEmpresaConsumidora
        })
    }catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar a nova Empresa Consumidora"
        })
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const updateEmpresaConsumidoraId = await Empresa.updateOne(
            {_id: req.params.id},
            {Peso_Disponivel_kg: req.body.Peso_Disponivel_kg}
        )
        res.json({
            success: true,
            updated: updateEmpresaConsumidoraId.modifiedCount
        })

    }catch(err){
        res.json({
            success: false,
            message: "Não foi possível atualizar a nova Empresa Fornecedora"
        })
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deletaEmpresaConsumidoraId = await Empresa.deleteOne({
           _id: req.params.id 
        })
        res.json({
            success: true,
            data: deletaEmpresaConsumidoraId
        })

    }catch(err){
        res.json({
            success: false,
            data: err
        })

    }
})

module.exports = router;