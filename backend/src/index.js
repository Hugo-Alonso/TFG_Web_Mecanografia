import express from "express";
import dotenv from "dotenv";

import authRoutes from './routes/auth.route.js';
import testRoutes from './routes/test.route.js'

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use('/api/auth', authRoutes);

app.use('/api/save', testRoutes);

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}!`
))