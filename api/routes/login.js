const express = require('express');
const db = require('../db');

const router = express.Router();

router.post("/login", async (req, res) => {
    // TODO : Récupérer toutes les cartes
    res.send("Pas implémenté");
});




module.exports = router;