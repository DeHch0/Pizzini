const express = require('express')
const app = express();
const config = require('./Config/config.js');
const db = require('./Db/dbConfig');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./router')(app);

db.then(() => {
    console.log('Connected to db successfully');
});

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`)
})