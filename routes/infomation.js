const express = require('express');
const router = express.Router();
const { collection, getDocs, addDoc, doc, deleteDoc, setDoc } = require("firebase/firestore"); 
const {db, storage } = require('../config/firebase/firebaseConfig');
const { ref, uploadBytes } = require('firebase/storage');


router.get('/', async (req, res) => {

    try {

        let result = {};

        const querySnapshot = await getDocs(collection(db, 'info'));
        querySnapshot.forEach((doc) => {
            result = {...doc.data(), id: doc.id}
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

        // await setDoc(doc(db,'info', req.body.id), {name, email,image})
        

        console.log(req.body);

        // const storageRef = ref(storage, '/images');
        
        // uploadBytes(storageRef, image).then((snapshot) =>{
        //     console.log('upload done');
        // })
        res.status(200).json({ message: 'Chỉnh sửa thành công' })

    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error' });
    }
})

module.exports = router;