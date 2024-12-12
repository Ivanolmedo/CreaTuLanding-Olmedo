import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-WWmWP88wQKG4oQD40oQOa0Cc4lcFQfQ",
  authDomain: "coderhouse-ecommerse-io.firebaseapp.com",
  projectId: "coderhouse-ecommerse-io",
  storageBucket: "coderhouse-ecommerse-io.firebasestorage.app",
  messagingSenderId: "258919634925",
  appId: "1:258919634925:web:6a1131d3829de4dadd79e4",
  measurementId: "G-2ZQXBDH3JN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 
export const firebaseApp = app;