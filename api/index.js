const express = require('express');

const app = express();
const cors = require("cors")
const carte = require('./routes/carte');
const restoU = require('./routes/restoU');
const aliment = require('./routes/aliment');
const login = require('./routes/login');
const dotenv = require('dotenv');
dotenv.config();
//const host = process.env.HOST_API;
const port = process.env.PORT_SERVER_API;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API de RestoU !");
});

app.use(cors())
app.use(express.json());
app.use('/api',carte);
app.use('/api',restoU);
app.use('/api',aliment);
app.use('/api',login);

app.listen(port, /*host, */() => {
    console.log(`API server listening at http://$localhost:${port}`);
});
