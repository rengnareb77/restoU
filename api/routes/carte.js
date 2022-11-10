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
    const body = req.body;
    const id = req.params.id;
    console.log(body);
    db.updateCarte(id, body)
        .then(()=>res.set(200).send("Carte mise à jour"))
        .catch((e)=> console.log(e));
});


module.exports = router;
