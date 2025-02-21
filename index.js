const express = require('express');
const app = express();
const personeRoutes = require('./public/routes/persone')
const prodottiRoutes = require('./public/routes/prodotti')

const port = 3000
app.use(express.static('public'))
app.use("/api/persone", personeRoutes)
app.use("/api/prodotti", prodottiRoutes)


app.listen(port)