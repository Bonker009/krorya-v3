// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACw6Wr6O2R1N1iCe9_mf3oL5NbRLi5BTI',
  authDomain: 'krorya-v3.firebaseapp.com',
  projectId: 'krorya-v3',
  storageBucket: 'krorya-v3.appspot.com',
  messagingSenderId: '863905928100',
  appId: '1:863905928100:web:110eee6584bf4ab1662731',
  measurementId: 'G-FHK5N87PBM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
