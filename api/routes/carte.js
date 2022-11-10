const express = require('express');
const db = require('../db');

const router = express.Router();

router.get("/cartes", async (req, res) => {
    // TODO : Récupérer toutes les cartes
    res.send("Pas implémenté");
});

router.get("/carte/:ru/:date/:service", async (req, res) => {
    // TODO : Récupérer une carte spécifique
    const ru = req.params.ru;
    const date = req.params.date;
    const service = req.params.service;

    const data = await db.getCarte(ru,date,service);

    
    let json = {
        "restoU":ru,
        "date":date,
        "moment":service,
        "composition":[
        {
            "type":data[0],
            "aliments":data[1]
        },
        {
            "type":data[2],
            "aliments":data[3]
        }, 
        {
            "type":data[4],
            "aliments":data[5]
        }   
            ]
    }

    res.send(json);
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