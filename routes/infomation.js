const express = require('express');
const router = express.Router();
const { collection, getDocs, addDoc, doc, deleteDoc, setDoc } = require("firebase/firestore"); 
const {db } = require('../config/firebase/firebaseConfig');

router.get('/', async (req, res) => {

    try {

        let result = [];

        const querySnapshot = await getDocs(collection(db, 'info'));
        querySnapshot.forEach((doc) => {
            result.push({...doc.data(), id: doc.id})
        })

        return res.json(result);
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error'});
    }
});

router.post('/update', async(req, res) => {

    try {
        let {name, email ,image} = req.body;

        await setDoc(doc(db,'info', req.body.id), {name, email,image})
        res.status(200).json({ message: 'Chỉnh sửa thành công' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error' });
    }
})

module.exports = router;