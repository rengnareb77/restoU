const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/aliments',async function(req,res){
    db.getAliments()
        .then((data)=>res.set(200).json(data))
        .catch(()=> res.set(500).send("Erreur lors de la recuperation des aliments"));

});
router.get("/aliment/:id", async (req, res) => {
    const id = req.params.id;
    db.getAlimentById(id)
        .then((data)=>res.set(200).send(data))
        .catch(()=> res.set(500).send("Erreur lors de la recuperation des aliments"));
});

router.post("/aliment", async (req, res) => {
    const body = req.body;
    db.createAliment(body)
        .then(()=>res.set(200).send("Aliment créé"))
        .catch(()=> res.set(500).send("Erreur lors de la création de l'aliment"));
});

router.put("/aliment/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    db.updateAliment(id,body)
        .then(()=>res.set(200).send("Aliment modifié"))
        .catch(()=> res.set(500).send("Erreur lors de la modification de l'aliment"));
});


router.delete("/aliment/:id", async (req, res) => {
    const id = req.params.id;
    db.deleteAliment(id)
        .then(()=>res.set(200).send("Aliment supprimé"))
        .catch(()=> res.set(500).send("Erreur lors de la suppression de l'aliment"));
});


module.exports = router;
