const express = require('express');
const db = require('../db');

const router = express.Router();

router.get("/restoU", async (req, res) => {
    db.getRestoU()
        .then(data => res.set(200).json(data))
        .catch(()=> res.set(500).send("Erreur lors de la récupération des restaurants"));
});

router.get("/restoU/:id", async (req, res) => {
    const id = req.params.id;
    db.getRestoUById(id)
        .then(data => res.set(200).json(data))
        .catch(()=> res.set(500).send("Erreur lors de la récupération du restaurant"));
});
module.exports = router;