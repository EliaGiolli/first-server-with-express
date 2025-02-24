const express = require('express');
const app = express();

const quotesRoutes = require('./routes/quotes')
const authRoutes = require('./routes/auth')

//we're telling Express to use the Public folder to manage static files
app.use(express.static('Public'));


const port = 3000;

app.set('view engine','ejs')

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: false }));

//Route for the Authentication
app.use('/', authRoutes)
//Route for the API
app.use('/api/quotes', quotesRoutes)


app.listen(port, () => console.log('Server running on port 3000'));


