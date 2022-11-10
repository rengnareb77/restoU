const express = require('express');
const db = require('../db');

const router = express.Router();

router.get("/cartes", async (req, res) => {
    res.json(await db.getCartes());
});

router.get("/carte/:ru/:date/:service", async (req, res) => {
    // TODO : Récupérer une carte spécifique
    res.send("Pas implémenté");
});

router.post("/carte", async (req, res) => {
    // TODO : Ajouter une carte
    res.send("Pas implémenté");
});

router.put("/carte/:id", async (req, res) => {
    // TODO : Modifie une carte
    res.send("Pas implémenté");
});


module.exports = router;