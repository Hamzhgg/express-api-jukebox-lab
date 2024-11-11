
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

// 
require('./config/database');
const app = express();
// const port = process.env.PORT ? process.env.PORT : "3000";
const trackRouter = require('./controllers/track.js');
// 
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cors({origin: process.env.CORS_ORIGIN}));

// Routes

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use('/tracks', trackRouter);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
