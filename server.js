const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
