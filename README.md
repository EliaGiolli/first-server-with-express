# Quotes API Project

## Description

This project is a simple Express-based API that allows users to interact with a collection of quotes. Users can retrieve random quotes, get a specific quote by its ID, add new quotes, update existing ones, and delete quotes. It uses EJS for templating and supports user authentication and session management.

## Installation

Follow these steps to get the project up and running locally:

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) (alternative to npm)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quotes-api.git
   ```
   
2. Navigate to the project folder:
```bash
cd quotes-api
```
3. Install the dependencies:
```bash
npm install
```
4. Configure the server by setting environment variables (optional for local setup):
- Create a .env file in the root of the project.
- Add any necessary environment variables like PORT, DB_URI, etc.

5. Start the server:
```bash
npm start
```
The server will be running on http://localhost:3000.

## Dependencies
This project includes the following key dependencies:

1. **bcrypt**
- Version: 5.1.1
- Description: A library to hash passwords and provide a secure method for storing and validating user credentials.
- Installation: This is installed automatically when you run npm install.
2. **ejs**
- Version: 3.1.10
- Description: EJS is a templating engine used to generate HTML markup with embedded JavaScript. It's used to render views in the app.
- Installation: This is installed automatically when you run npm install.
3. **express**
- Version: 4.21.2
- Description: Express is a fast, unopinionated, minimalist web framework for Node.js. It's used to create the server and manage routing in this project.
- Installation: This is installed automatically when you run npm install.

## Usage
Once the server is running, you can interact with the API via the following endpoints:

- GET **/api/quotes** - Get all quotes.
- GET **/api/quotes/random** - Get a random quote.
- GET **/api/quotes/:id** - Get a quote by its ID.
- POST **/api/quotes** - Add a new quote (requires id, author, and quote in the request body).
- PUT **/api/quotes/:id** - Update an existing quote by ID.
- DELETE **/api/quotes/:id** - Delete a quote by ID.
For user authentication, refer to the login and registration endpoints (if implemented).



