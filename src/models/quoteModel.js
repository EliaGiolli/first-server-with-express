import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'Quote text is required'],
        trim: true,
        minlength: [1, 'Quote cannot be empty']
    },
    author: {
        type: String,
        required: [true, 'Author name is required'],
        trim: true,
        minlength: [1, 'Author name cannot be empty']
    }
}, {
    timestamps: true // Aggiunge automaticamente createdAt e updatedAt
});

export default mongoose.model('Quote', quoteSchema);