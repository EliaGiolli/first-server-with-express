import mysql from 'mysql2/promise';

//connect to an existing database
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'db_quotes',
    waitForConnections: true,
    connectionLimit: 10,
});