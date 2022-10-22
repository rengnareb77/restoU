const express = require('express');
const db = require('../db');

const router = express.Router();

router.get("/restoU", async (req, res) => {
    res.json(await db.getRestoU());
});

router.get("/restoU/:id", async (req, res) => {
    const id = req.params.id;
    const ru = await db.getRestoUById(id)
    res.json(ru[0]);
});
module.exports = router;