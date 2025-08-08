
import express from 'express';

import { 
    getQuotes, 
    getQuoteById, 
    createQuote, 
    updateQuote, 
    deleteQuote, 
    getRandomQuote, 
    getQuoteByAuthor 
} from '../controllers/quoteController.js';

const router = express.Router();

router.use(express.json());

// Get all quotes
router.get('/', getQuotes);

// Get a random quote (MUST come before /:id)
router.get('/random', getRandomQuote);

// Get quotes by author (MUST come before /:id)
router.get('/author/:author', getQuoteByAuthor);

// Get a quote by ID
router.get('/:id', getQuoteById);

// Add a new quote
router.post('/', createQuote);

// Update a quote by ID
router.put('/:id', updateQuote);

// Delete a quote by ID
router.delete('/:id', deleteQuote);

export default router;
