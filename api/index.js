const express = require('express');

const app = express();
const restoU = require('./routes/restoU');
const menu = require('./routes/menu');
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api',restoU);
app.use('/api',menu);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
