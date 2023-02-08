const express = require('express');
const router = express.Router();
const { collection, getDocs, addDoc, doc, deleteDoc, setDoc } = require("firebase/firestore"); 
const {db } = require('../config/firebase/firebaseConfig');


router.post('/', async (req, res) => {
    try {

        const querySnapshot = await getDocs(collection(db, 'account'));
        querySnapshot.forEach((doc) => {
            
            if(doc.data().username != req.body.username || doc.data().password !== req.body.password) return res.json({ message: 'Sai tài khoản'});
            return res.status(200).json({ message: 'Đăng nhập thành công'})
        })

    } catch (error) {
        return res.status(404).json({ message: 'Error'});
    }
})


module.exports = router;