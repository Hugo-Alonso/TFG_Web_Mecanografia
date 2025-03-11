import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.route.js';

const app = express();
const port = 5001;

app.use('/api/auth', authRoutes);

app.listen(port, () => 
    console.log(`Server running on port ${port}!`
))