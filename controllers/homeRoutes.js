const router = require('express').Router();
const fs =require('fs');
const path =require('path');

router.get('/', async(req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get('/notes', async(req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;