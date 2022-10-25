const express = require('express');
const db = require('../db');

const router = express.Router();

router.post("/aliment", async (req, res) => {
    const body = req.body;
    db.createAliment(body)
        .then(()=>res.set(200).send("Aliment créé"))
        .catch(()=> res.set(500).send("Erreur lors de la création de l'aliment"));
});

router.delete("/aliment/:id", async (req, res) => {
    const id = req.params.id;
    db.deleteAliment(id)
        .then(()=>res.set(200).send("Aliment supprimé"))
        .catch(()=> res.set(500).send("Erreur lors de la suppression de l'aliment"));
});


module.exports = router;