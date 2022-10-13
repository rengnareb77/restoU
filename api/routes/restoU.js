const express = require('express');

const router = express.Router();

router.get("/restoU", (req, res) => {
    res.send([{nom: "Kergoat", ville: "Brest"}, {nom: "Ar-Men", ville: "Brest"}]);
});
module.exports = router;