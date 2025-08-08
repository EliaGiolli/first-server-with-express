import express from 'express';
import quotesRoutes from './routes/quotesRoute.js';
import helmet from 'helmet';

const app = express();

app.use(express.static('Public'));

//app.set('view engine','ejs')

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Helmet helps the app to be protected from vulnerabilities
app.use(helmet());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/quotes', quotesRoutes);

// API Documentation route
app.get('/api', (req, res) => {
    res.json({
        message: 'Quotes API',
        endpoints: {
            'GET /api/quotes': 'Get all quotes',
            'GET /api/quotes/random': 'Get a random quote',
            'GET /api/quotes/author/:author': 'Get quotes by author',
            'GET /api/quotes/:id': 'Get quote by ID',
            'POST /api/quotes': 'Create a new quote',
            'PUT /api/quotes/:id': 'Update a quote',
            'DELETE /api/quotes/:id': 'Delete a quote'
        },
        example: {
            'POST /api/quotes': {
                body: {
                    author: 'Albert Einstein',
                    quote: 'Imagination is more important than knowledge.'
                }
            }
        }
    });
});

// Handle 404 for unmatched routes
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

export default app;