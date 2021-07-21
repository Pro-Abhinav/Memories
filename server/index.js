import express from 'express';
import bodyParser from  'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'; 

dotenv.config();
const app = express();

app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.use('/posts', postRoutes);
app.use('/user', userRoutes);