import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/server.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURI = process.env.MONGO_URI ?? console.error('No MONGO_URI available');

mongoose.connect(MONGOURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
});


