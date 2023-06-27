// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDu-HJum-tdR9Ssm9XT9ULwjy5luQnt4cA',
  authDomain: 'real-state-react.firebaseapp.com',
  projectId: 'real-state-react',
  storageBucket: 'real-state-react.appspot.com',
  messagingSenderId: '153768526226',
  appId: '1:153768526226:web:f9402b41748a90723a414b',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
