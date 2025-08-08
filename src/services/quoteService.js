import Quote from '../models/quoteModel.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

class QuoteService {
    
    async getAllQuotes() {
        const quotes = await Quote.find({});
        return quotes;
    }
    
    async getQuoteById(id) {
        const quote = await Quote.findById(id);
        return quote;
    }
    
    async createQuote(quoteData) {
        const { author, quote } = quoteData;
        
        this.validateQuoteData(author, quote);
        
        const newQuote = await Quote.create({ author, quote });
        return newQuote;
    }
    
    async updateQuote(id, updateData) {
        const { author, quote } = updateData;
        
        if (!author && !quote) {
            throw new Error(ERROR_MESSAGES.VALIDATION.AT_LEAST_ONE_FIELD);
        }
        
        if (author) this.validateAuthor(author);
        if (quote) this.validateQuoteText(quote);
        
        const updatedQuote = await Quote.findByIdAndUpdate(id, updateData, { new: true });
        return updatedQuote;
    }
    
    async deleteQuote(id) {
        const deletedQuote = await Quote.findByIdAndDelete(id);
        return deletedQuote;
    }
    
    async getRandomQuote() {
        const quotes = await Quote.aggregate([{ $sample: { size: 1 } }]);
        return quotes.length > 0 ? quotes[0] : null;
    }
    
    async getQuotesByAuthor(author) {
        const quotes = await Quote.find({ author: author });
        return quotes;
    }
    
    validateQuoteData(author, quote) {
        if (!author || !quote) {
            throw new Error(ERROR_MESSAGES.VALIDATION.AUTHOR_REQUIRED);
        }
        
        this.validateAuthor(author);
        this.validateQuoteText(quote);
    }
    
    validateAuthor(author) {
        if (typeof author !== 'string') {
            throw new Error(ERROR_MESSAGES.VALIDATION.AUTHOR_STRING);
        }
        
        if (author.trim().length === 0) {
            throw new Error(ERROR_MESSAGES.VALIDATION.AUTHOR_EMPTY);
        }
    }
    
    validateQuoteText(quote) {
        if (typeof quote !== 'string') {
            throw new Error(ERROR_MESSAGES.VALIDATION.QUOTE_STRING);
        }
        
        if (quote.trim().length === 0) {
            throw new Error(ERROR_MESSAGES.VALIDATION.QUOTE_EMPTY);
        }
    }
}

export default new QuoteService();
