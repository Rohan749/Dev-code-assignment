import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDya0GHvBJ_RKVDyRVobemNKzg-0DZ-J9Q",

  authDomain: "blog-website-authentication.firebaseapp.com",

  projectId: "blog-website-authentication",

  storageBucket: "blog-website-authentication.appspot.com",

  messagingSenderId: "250356234717",

  appId: "1:250356234717:web:14d69341cb0ddf5db4de34",

  measurementId: "G-XJZCEKWHM2"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

