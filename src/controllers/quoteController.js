import quoteService from '../services/quoteService.js';
import { 
    STATUS_CODES, 
    ERROR_MESSAGES, 
    SUCCESS_MESSAGES, 
    createSuccessResponse, 
    createErrorResponse 
} from '../utils/constants.js';

export const getQuotes = async (req, res) => {
    try {
        const quotes = await quoteService.getAllQuotes();
        
        if (quotes.length === 0) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NO_QUOTES_AVAILABLE));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse(quotes));
    } catch (error) {
        console.error('Error getting quotes:', error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createErrorResponse(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR));
    }
};

export const getQuoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await quoteService.getQuoteById(id);
        
        if (!quote) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NOT_FOUND));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse(quote));
    } catch (error) {
        console.error('Error getting quote by ID:', error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createErrorResponse(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR));
    }
};

export const createQuote = async (req, res) => {
    try {
        const { author, quote } = req.body;
        const newQuote = await quoteService.createQuote({ author, quote });
        
        res.status(STATUS_CODES.CREATED).json(createSuccessResponse(newQuote));
    } catch (error) {
        console.error('Error creating quote:', error);
        res.status(STATUS_CODES.BAD_REQUEST).json(createErrorResponse(error.message));
    }
};

export const updateQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const { author, quote } = req.body;
        
        const updateData = {};
        if (author) updateData.author = author;
        if (quote) updateData.quote = quote;
        
        const updatedQuote = await quoteService.updateQuote(id, updateData);
        
        if (!updatedQuote) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NOT_FOUND));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse(updatedQuote));
    } catch (error) {
        console.error('Error updating quote:', error);
        res.status(STATUS_CODES.BAD_REQUEST).json(createErrorResponse(error.message));
    }
};

export const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuote = await quoteService.deleteQuote(id);
        
        if (!deletedQuote) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NOT_FOUND));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse({ message: SUCCESS_MESSAGES.QUOTE_DELETED }));
    } catch (error) {
        console.error('Error deleting quote:', error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createErrorResponse(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR));
    }
};

export const getRandomQuote = async (req, res) => {
    try {
        const quote = await quoteService.getRandomQuote();
        
        if (!quote) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NO_QUOTES_AVAILABLE));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse(quote));
    } catch (error) {
        console.error('Error getting random quote:', error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createErrorResponse(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR));
    }
};

export const getQuoteByAuthor = async (req, res) => {
    try {
        const { author } = req.params;
        const quotes = await quoteService.getQuotesByAuthor(author);
        
        if (quotes.length === 0) {
            return res.status(STATUS_CODES.NOT_FOUND).json(createErrorResponse(ERROR_MESSAGES.QUOTES.NO_QUOTES_BY_AUTHOR));
        }
        
        res.status(STATUS_CODES.OK).json(createSuccessResponse(quotes));
    } catch (error) {
        console.error('Error getting quotes by author:', error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createErrorResponse(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR));
    }
};