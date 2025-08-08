// HTTP Status Codes
export const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

// Error Messages
export const ERROR_MESSAGES = {
    QUOTES: {
        NOT_FOUND: 'Quote not found',
        NO_QUOTES_AVAILABLE: 'No quotes available!',
        NO_QUOTES_BY_AUTHOR: 'No quotes found for this author',
        INVALID_ID: 'Invalid ID format'
    },
    VALIDATION: {
        AUTHOR_REQUIRED: 'Author and quote are required',
        AUTHOR_EMPTY: 'Author cannot be empty',
        QUOTE_EMPTY: 'Quote cannot be empty',
        AUTHOR_STRING: 'Author must be a string',
        QUOTE_STRING: 'Quote must be a string',
        AT_LEAST_ONE_FIELD: 'At least one field (author or quote) is required'
    },
    GENERAL: {
        INTERNAL_SERVER_ERROR: 'Internal server error'
    }
};

// Success Messages
export const SUCCESS_MESSAGES = {
    QUOTE_DELETED: 'Quote deleted successfully'
};

// Response Templates
export const createSuccessResponse = (data) => ({
    success: true,
    data
});

export const createErrorResponse = (message) => ({
    error: message
}); 