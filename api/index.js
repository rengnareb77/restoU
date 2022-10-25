const express = require('express');

const app = express();
const carte = require('./routes/carte');
const restoU = require('./routes/restoU');
const aliment = require('./routes/aliment');
const login = require('./routes/login');
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express.json());
app.use('/api',carte);
app.use('/api',restoU);
app.use('/api',aliment);
app.use('/api',login);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
