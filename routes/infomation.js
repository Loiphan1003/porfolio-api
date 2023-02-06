const express = require('express');
const router = express.Router();
const Infos = require('../models/Infos');


router.get('/', async (req, res) => {

    Infos.find({}, function (err, infos) {
        if(!err) return res.json({infos})
        res.status(404).json({ message: `${err}`})
    })


    
});

router.post('/', (req, res) => {
    res.status(200).json({
        massage: 'Handling POST request'
    })
});

module.exports = router;