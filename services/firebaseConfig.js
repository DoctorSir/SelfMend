import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2ocXNcPjhqpufkbANeDf8pmFEnqAQyTs",
    authDomain: "selfmend.firebaseapp.com",
    projectId: "selfmend",
    storageBucket: "selfmend.appspot.com",
    messagingSenderId: "130896572956",
    appId: "1:130896572956:web:5f9b7e929052b64a91e5d9",
    measurementId: "G-BRGD435G96"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
