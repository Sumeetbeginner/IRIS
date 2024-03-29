
import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC4HIurEz9ubZpJflriRBR1v_HmQTkoJpY",
    authDomain: "iris-e9086.firebaseapp.com",
    projectId: "iris-e9086",
    storageBucket: "iris-e9086.appspot.com",
    messagingSenderId: "221986627745",
    appId: "1:221986627745:web:1f44b528138a6fc680d0e0",
    measurementId: "G-8J6G2D2J3V"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, app };
