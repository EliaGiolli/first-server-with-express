import { createPool } from 'mysql2';
import mysql from 'mysql2/promise'

export async function createDatabase(){
    //connection to an unspecified database
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

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

