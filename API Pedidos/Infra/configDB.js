
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyComL1e7Lbs0A05huiIslT6NwLc2Ark_vY",
    authDomain: "mercatour-api-pedidosmercado.firebaseapp.com",
    projectId: "mercatour-api-pedidosmercado",
    storageBucket: "mercatour-api-pedidosmercado.appspot.com",
    messagingSenderId: "764554425364",
    appId: "1:764554425364:web:f5cb2ac62f64f6bfa96301",
    measurementId: "G-7Z643PYCD4"
  };


export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase)