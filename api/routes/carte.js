const express = require('express');
const { SqlError } = require('mariadb');
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

router.post("/carte/:id", async (req, res) => {    
    db.createCarte(req.body)
        .then((data)=>res.set(201).send({message:"Carte créée",data:data}))
        .catch(
            /**
             * 
             * @param {Error|SqlError} err 
             */
            (err)=>{
                console.error(err);
                let message = "Erreur lors de la création de la carte";
                let errCode = 500;
                if (err.name== "SqlError") {
                    switch (err.code) {
                        case "ER_PARAMETER_UNDEFINED":
                            errCode = 400;
                            message = "Parèmetre manquant";
                            break;
                        case "ER_NO_REFERENCED_ROW_2":
                            errCode = 400;
                            message = "Le RestoU indiqué n'existe pas";
                        default:
                            break;
                    }
                }
                res.set(errCode).send({message});
            });
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
