import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC390FEebv2Iyz9wNil2BWFV8AZ-vhiHTI",
    authDomain: "ibos-d1390.firebaseapp.com",
    projectId: "ibos-d1390",
    storageBucket: "ibos-d1390.appspot.com",
    messagingSenderId: "560715629059",
    appId: "1:560715629059:web:2175688f0ca42159700436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider, auth }