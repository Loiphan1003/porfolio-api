const { db } = require("./firebaseConfig.js");

const {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  deleteField,
  doc,
  endAt,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  startAfter,
  startAt,
  updateDoc,
  where,
} = require("firebase/firestore");

const getDocuments = async (query) => {

    let arr = [];
    
    const querySnapshot = await getDocs(collection(db, query));
    querySnapshot.forEach((doc) => {
        return arr.push({...doc.data(), id: doc.id})
    //   console.log(`${doc.id} => ${doc.data()}`);
    });

    // console.log(arr)
    return arr;
  
};

module.exports = { getDocuments }