//now I can have access to the variable form .env anywhere in my project
//const dbHost = process.env.DB_HOST; -> the way we must use them
import 'dotenv/config';
import express from 'express';

import quotesRoutes from './routes/quotes.js';
import authRoutes from './routes/auth.js';
import { pool } from './config/database.js';

const app = express();

const port = 3001;
//we're telling Express to use the Public folder to manage static files
app.use(express.static('Public'));

app.set('view engine','ejs')

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Route for the Authentication
app.use('/', authRoutes)
//Route for the API
app.use('/api/quotes', quotesRoutes)

app.listen(port, () => console.log('Server running on port 3001'));


