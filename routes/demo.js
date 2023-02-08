const express = require('express');
const router = express.Router();
const { collection, getDocs, addDoc, doc, deleteDoc, setDoc } = require("firebase/firestore"); 
const {db } = require('../config/firebase/firebaseConfig');

router.get('/', async (req, res) => {

    try {

        let result = [];

        const querySnapshot = await getDocs(collection(db, 'demos'));
        querySnapshot.forEach((doc) => {
            result.push({...doc.data(), id: doc.id})
        })

        return res.json(result);
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error'});
    }
});

// Lây dữ liệu của 1 demo
router.get('/:id', async (req, res) => {

    try {
        
        const querySnapshot = await getDocs(collection(db, 'demos'));
        querySnapshot.forEach((doc) => {
            if(doc.id !== req.params.id) return res.json({ message: 'Không có demo'});
            return res.json({...doc.data(), id: doc.id})
        })

    } catch (error) {
        return res.status(404).json({ message: 'Error'});
    }

})

// Thêm 1 demo
router.post('/post', async (req, res) => {

    try {
        let demo = req.body;
        
        await addDoc(collection(db, 'demos'), demo)
        return res.status(200).json({ message: 'Thêm thành công'})

    } catch (error) {
        return res.status(404).json({ message: 'Error'});
    }

});


//  Xóa 1 demo
router.post('/delete', async(req, res) => {
    try {
        
        let id = req.body.id;
        await deleteDoc(doc(db, 'demos', id));
        return res.status(200).json({ message: 'Xóa thành công' })

    } catch (error) {
        return res.status(404).json({ message: 'Error' });
    }
})

// Sửa 1 demo
router.post('/update', async(req, res) => {

    try {
        let {name, image} = req.body;

        await setDoc(doc(db,'demos', req.body.id), {name, image})
        res.status(200).json({ message: 'Chỉnh sửa thành công' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error' });
    }
})

module.exports = router;