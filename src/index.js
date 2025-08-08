//now I can have access to the variable form .env anywhere in my project
//const dbHost = process.env.DB_HOST; -> the way we must use them
import dotenv from 'dotenv';
import app from './server';

dotenv.config();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


