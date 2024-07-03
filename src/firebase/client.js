import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqUNlg5wEZoI-KhbW6CCbVvI8jIfGzz3M",
  authDomain: "ecommerce-5770.firebaseapp.com",
  projectId: "ecommerce-5770",
  storageBucket: "ecommerce-5770.appspot.com",
  messagingSenderId: "1010443247224",
  appId: "1:1010443247224:web:913f8a2e7d0782ce61978d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//GET
export const getData = async (collectionName) => {
  try {
    const dataCollection = collection(db, collectionName);
    const dataSnapshot = await getDocs(dataCollection);
    const data = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    console.log("Error in get", err);
    throw err;
  }
};
//POST
export const postData = async (data, nameCollection) => {
  const dataCollection = collection(db, nameCollection);
  try {
    const docRef = await addDoc(dataCollection, data);
    return docRef.id;
  } catch (err) {
    console.log(`Error in post, product ${d.id}`, err);
    throw err;
  }
};
