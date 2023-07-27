// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // databaseURL:process.env.REACT_APP_DATABASE_URL
  apiKey: "AIzaSyCrjXPkDxza2XFm-Fyxz5lkP8NzflMo5gQ",
  authDomain: "olx-clone-544f6.firebaseapp.com",
  projectId: "olx-clone-544f6",
  storageBucket: "olx-clone-544f6.appspot.com",
  messagingSenderId: "392337831789",
  appId: "1:392337831789:web:bd3e2f3662770724354c64",
  databaseURL:"https://olx-clone-544f6.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);

export {auth,db,storage};