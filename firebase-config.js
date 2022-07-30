import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTuO-u70a3OnOApEoncIkCqP7WYAr0COo",
  authDomain: "onwardv4.firebaseapp.com",
  projectId: "onwardv4",
  storageBucket: "onwardv4.appspot.com",
  messagingSenderId: "368836103265",
  appId: "1:368836103265:web:074e33acc087bb3aa2ae20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);