import { createPool } from 'mysql2';
import mysql from 'mysql2/promise'

export async function createDatabase(){
    //connection to an unspecified database
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS db_quotes');

    await connection.end();

    //create tables
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'db_quotes',
    })
    await createTables(pool);
    await pool.end();

}

async function createTables(pool){
    const connection = await pool.getConnection();

    try{
        await connection.query(`
            CREATE TABLE IF NOT EXISTS quotes(
                id INT AUTO_INCREMENT PRIMARY KEY,
                text TEXT NOT NULL,
                author VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Tables created/verified');
    }catch(err){
        console.error("an error with the table occurred",err);
    }finally{
        connection.release();
    }
}

