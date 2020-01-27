const express = require('express');

require('dotenv').config();

require('./database');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
