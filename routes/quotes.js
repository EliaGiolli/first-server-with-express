const quotes = require('../data/data.js');
const express = require('express');
const router = express.Router();

router.use(express.json())

// Get a random quote
router.get('/', (req, res) => {
    if (quotes.length === 0) {
        return res.status(404).json({ error: "No quotes available!" });
    }
    res.status(200).json({success: true, data: quotes});
});

// Get a quote by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const quote = quotes.find(quote => quote.id === id);
    
    if (!quote) {
        return res.status(404).json({ error: "Quote not found!" });
    }
    
    res.status(200).json({ success: true, data: quote });
});

// Add a new quote
router.post('/', (req, res) => {
    const quote = req.body;
    if (!quote.id || !quote.author || !quote.quote) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    quotes.push(quote);
    res.status(200).json({ success: true, data: quotes });
});

// Update a quote by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const quote = req.body;

    const index = quotes.findIndex(q => q.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Quote not found!" });
    }

    quotes[index] = { ...quotes[index], ...quote }; // Update the existing quote
    res.status(200).json({ success: true, data: quotes });
});

// Delete a quote by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = quotes.findIndex(quote => quote.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Quote not found!" });
    }

    quotes.splice(index, 1); // Remove the quote
    res.status(200).json({ success: true, data: quotes });
});

module.exports = router;
