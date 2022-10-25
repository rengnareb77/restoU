const express = require('express');

const app = express();
const restoU = require('./routes/restoU');
const aliment = require('./routes/aliment');
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express.json());
app.use('/api',restoU);
app.use('/api',aliment);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
