const express = require('express');
const app = express();
const port = 3000;

const infoRoutes = require('./routes/infomation');
const demoRoutes = require('./routes/demo');
const db = require('./config/db');

db.connect();


app.use('/info', infoRoutes);
app.use('/demo', demoRoutes);

app.listen(port, () => {
    console.log(`Api listening on port ${port}`)
})