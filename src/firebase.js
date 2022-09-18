//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAa9qyD5qoAr0RpY8V0EI5lC4edto8PnEc",
    authDomain: "portfolio-4dd66.firebaseapp.com",
    projectId: "portfolio-4dd66",
    storageBucket: "portfolio-4dd66.appspot.com",
    messagingSenderId: "772602800474",
    appId: "1:772602800474:web:a4ad565a9c9b6871c66b63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();
export { storage };