const express = require('express');

const app = express();
const restoU = require('./routes/restoU');
const port = 7021;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api',restoU);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
