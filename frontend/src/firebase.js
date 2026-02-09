import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGq_T968_J-pjNx2xSxYjmLowOrzYvSVI",
  authDomain: "financehub-6d61a.firebaseapp.com",
  projectId: "financehub-6d61a",
  storageBucket: "financehub-6d61a.firebasestorage.app",
  messagingSenderId: "220264093983",
  appId: "1:220264093983:web:6f5c01e4ce19777ec04f82a",
  measurementId: "G-WGK45DBFDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
