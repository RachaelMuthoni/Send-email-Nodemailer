const express = require('express');
const mailRoute = require('./routes/mailRoute')
const app = express();
const port = 5000;

app.use('/email', mailRoute)

app.listen(port, () => console.log(`Server running on port ${port}`))
