const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {config} = require('dotenv')
const app = express();
const port = 5000;

const infoRoutes = require('./routes/infomation');
const demoRoutes = require('./routes/demo');
const accountRoutes = require('./routes/account');
const emailRoutes = require('./routes/email');

config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({ origin: true, credentials: true }));


app.use('/info', infoRoutes);
app.use('/demo', demoRoutes);
app.use('/account', accountRoutes);
app.use('/email', emailRoutes);

app.listen(port, () => {
    console.log(`Api listening on port ${port}`)
})