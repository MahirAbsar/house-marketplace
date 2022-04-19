import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAepk01aZneKRbPm7vlgy39XsJLkiDVmsM',
  authDomain: 'house-market-ab494.firebaseapp.com',
  projectId: 'house-market-ab494',
  storageBucket: 'house-market-ab494.appspot.com',
  messagingSenderId: '800027748314',
  appId: '1:800027748314:web:ea93f2cc917d201b7642e3',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
