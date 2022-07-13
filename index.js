const express = require('express');
const router = require('./routes/mailRoute')
const router1 = require('./routes/eventRoute')
const app = express();
const port = 5000;

app.use('/email', router)
app.use('/event',router1)

app.listen(port, () => console.log(`Server running on port ${port}`))
