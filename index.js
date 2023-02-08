const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const infoRoutes = require('./routes/infomation');
const demoRoutes = require('./routes/demo');
const accountRoutes = require('./routes/account');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/info', infoRoutes);
app.use('/demo', demoRoutes);
app.use('/account', accountRoutes);

app.listen(port, () => {
    console.log(`Api listening on port ${port}`)
})