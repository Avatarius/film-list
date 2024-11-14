import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAOhyzajX5mhAwku213yoNp-ycgeDHAmhg",
  authDomain: "film-list-8f05a.firebaseapp.com",
  projectId: "film-list-8f05a",
  storageBucket: "film-list-8f05a.firebasestorage.app",
  messagingSenderId: "603881713110",
  appId: "1:603881713110:web:e5fbab65e8109cfa214877",
  measurementId: "G-EQZZ3Z2EZM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db};
