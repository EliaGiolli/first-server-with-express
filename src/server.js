import express from 'express';

import quotesRoutes from './routes/quotes.js';
import authRoutes from './routes/auth.js';
import helmet from 'helmet';


const app = express();

app.use(express.static('Public'));

//app.set('view engine','ejs')

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Helmet helps the app to be protected from vulnerabilities
app.use(helmet());

//ROUTES
app.use('/', authRoutes)
app.use('/api/quotes', quotesRoutes)
app.use('/', authRoutes)
app.use('/api/quotes', quotesRoutes)

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
});


export default app;