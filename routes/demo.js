const express = require('express');
const router = express.Router();
const Demos = require('../models/Demos');


router.get('/', async (req, res) => {

    Demos.find({}, function (err, demos) {
        if(!err) return res.json({demos})
        res.status(404).json({ message: `${err}`})
    })
});

// Lây dữ liệu của 1 demo
router.get('/:id', (req, res) => {
    Demos.findById(req.params.id, function (err, demos) {
        if(!err) return res.json(demos)
        res.status(404).json({ message: 'Id error' })
    })
})


router.post('/', (req, res) => {
    res.status(200).json({
        massage: 'Handling POST request'
    })
});

module.exports = router;