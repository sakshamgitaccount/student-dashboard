import { initializeApp } from 'firebase/app'
import { getAuth }       from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDG-ge6-uABgEhVfchoHUw6eVjVUmgM7bo",
  authDomain: "student-dashboard-b0b06.firebaseapp.com",
  projectId: "student-dashboard-b0b06",
  storageBucket: "student-dashboard-b0b06.firebasestorage.app",
  messagingSenderId: "860337749201",
  appId: "1:860337749201:web:de9963662bb77f28d219f0",
  measurementId: "G-7996FW078V"
};


const app  = initializeApp(firebaseConfig)
export const auth = getAuth(app)
