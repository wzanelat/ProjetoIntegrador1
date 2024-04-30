const express = require('express');
const router = express.Router();
const Empresa = require('../model/EmpresasFornecedoras')

router.get('/', async (req, res) => {
    try{
        const listaEmpresasFornecedoras = await Empresa.find()
        res.json({
            success: true,
            message: listaEmpresasFornecedoras
        })
    } catch{
        res.json({
            success: false,
            message: "Não foi possível listar as Empresas Fornecedoras"
        })
    }
    
})

router.post('/', async (req,res)=>{
    const novaEmpresaFornecedora = new Empresa({
        CNPJ: req.body.CNPJ,
        nome: req.body.nome,
        Peso_Min_Retirada_kg: req.body.Peso_Min_Retirada_kg
    })
    try{
        const saveNovaEmpresaFornecedora = await novaEmpresaFornecedora.save()
        res.json({
            success: true,
            message: saveNovaEmpresaFornecedora
        })
    }catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar a nova Empresa Fornecedora"
        })
    }
})


router.put('/:id', async(req, res)=>{
    try{
        const updateEmpresaFornecedoraId = await Empresa.updateOne(
            {_id: req.params.id},
            {Peso_Min_Retirada_kg: req.body.Peso_Min_Retirada_kg}
        )
        res.json({
            success: true,
            updated: updateEmpresaFornecedoraId.modifiedCount
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
        const deletaEmpresaFornecedoraId = await Empresa.deleteOne({
           _id: req.params.id 
        })
        res.json({
            success: true,
            data: deletaEmpresaFornecedoraId
        })

    }catch(err){
        res.json({
            success: false,
            data: err
        })

    }
})


module.exports = router;