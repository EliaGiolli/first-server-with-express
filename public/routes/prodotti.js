const express = require('express')
const router = express.Router()
const middlewareProva = require('../middleware/middlewareProva')

//finto database
const prodotti =[
    {
        id: "1",
        nome: "sedia",
        prezzo: "20"
    },
    {
        id: "2",
        nome: "calamaio senza inchiostro",
        prezzo: "400"
    }
]

//middleware
router.use(middlewareProva)
router.use(express.json())

router.get('/',(req, res) => {
    res.status(200).json({success: true, data:{prodotto: "sedia", prezzo: "30"}})
  })

router.post('/', (req,res)=>{
    const prodotto = req.body
    prodotti.push(prodotto)
    res.status(200).json({success: true, data: prodotti})
})
module.exports = router