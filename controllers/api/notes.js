const router = require('express').Router();
const fs =require('fs');
const path =require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', async (req,res) => {
    try {
        let allNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'))) //How you access the file path if you need to read or write a file.
        res.json(allNotes);
    } catch { //Needed if you're using a try and something goes wrong.
        if (!allNotes) {
            res.status(404).json({message: 'No notes found'});
            return;
        };
    }
});

router.post('/notes', async (req,res) => {
    try {
        let allNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'))) //How you access the file path if you need to read or write a file.
        req.body.id = uuidv4(); //generates a random id
        
        allNotes.push(req.body);
        
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(allNotes)) //First argument is the path to write, the second is the data
        
        res.json(allNotes); // Not stringified, but we want it to still be a .json so it works.
    } catch (err) { //Needed if you're using a try and something goes wrong.
    
            res.status(404).json({message: err.message});
    }
});

router.delete('/notes/:id', async (req,res) => {
    try {
        let allNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'))) //How you access the file path if you need to read or write a file.
        allNotes.push(req.body); //filter method for array or a splice method for an array.
        
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(allNotes)) //First argument is the path to write, the second is the data
        
        res.json(allNotes); // Not stringified, but we want it to still be a .json so it works.
    } catch (err) { //Needed if you're using a try and something goes wrong.
    
            res.status(404).json({message: err.message});
    }
});

module.exports = router;
