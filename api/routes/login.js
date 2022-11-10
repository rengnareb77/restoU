const express = require('express');
const db = require('../db');

const router = express.Router();

router.post("/login", async (req, res) => {
    // TODO : Récupérer toutes les cartes
    let body = req.body;
    let reponse = db.checkLogin(body);
    if(reponse.length>0){
        res.set(200).send("Login vérifié");
    }else{
        res.set(500).sned("Erreur Login");
    }
});



module.exports = router;
