import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTePEplbmjNl7OkSiYBpJc1D5_7oc6V1U",
    authDomain: "top-list-427d2.firebaseapp.com",
    projectId: "top-list-427d2",
    storageBucket: "top-list-427d2.appspot.com",
    messagingSenderId: "717654219919",
    appId: "1:717654219919:web:4a9fcbca75d15e7d1464fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}