const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/recipe-sharing-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Database connection error:', err));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
