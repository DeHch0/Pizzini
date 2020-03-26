const express = require('express');
const config = require('./Config/config');
const app = express();
const db = require('./Db/dbConfig');
const cors = require('cors');

app.use(cors())
app.use(express.json());

require('./router')(app);

db.then(() => {
    console.log('Connected to db successfully');

});

app.listen(config.port, () => {
    console.log(`Server: Listening on ${config.port}`);
});