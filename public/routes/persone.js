const express = require('express')
const router = express.Router()
const middlewareProva = require('../middleware/middlewareProva')


//finto database
const Persone = [
    {
        id: "1",
        nome: "mario",
        cognome: "draghi",
        eta: 70,
        indirizzo: {
            citta: "Roma",
            indirizzo: "via delle banche",
            cap: "08999"
        },
        interessi: ["finanza","economia","film americani"]
    },
    {
        id: "2",
        nome: "alessandro",
        cognome: "borghese",
        eta: 50,
        indirizzo: {
            citta: "Roma",
            indirizzo: "via dei diesci",
            cap: "08999"
        },
        interessi: ["cucina","recitazione","giardinaggio"]
    },
    {
        id: "3",
        nome: "mario",
        cognome: "sturniolo",
        eta: 25,
        indirizzo: {
            citta: "fornacette",
            indirizzo: "via dei nasoni",
            cap: "08835"
        },
        interessi: ["teatro","tecnologia","tomodachi"]
    },
]


//middleware
router.use(middlewareProva)
router.use(express.json())

router.get('/',(req, res) => {
    res.status(200).json({success: true, data:Persone})
  })
router.get('/:id', (req, res)=>{
    const {id} = req.params
    const persona = Persone.find(
        (persona) => persona.id === id
    )

    res.json({success: true, data: persona})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    const persona = req.body
    Persone.push(persona)
    res.status(200).json({success: true, data: Persone})
})

router.put('/:id', (req,res)=>{
    const {id} = req.params
    const persona = req.body
    Persone[Number(id)-1] = persona
    res.status(200).json({success: true, data: Persone})
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    const indexPersona = Persone.findIndex(persona => persona.id === id)
    Persone.splice(indexPersona, 1)
    res.status(200).json({success: true, data: Persone})
})

module.exports = router