import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvEUWkyIJU_85eAM0I4ZOV8Cqg7ilysi8',
  authDomain: 'linkedin-clone-d8aeb.firebaseapp.com',
  projectId: 'linkedin-clone-d8aeb',
  storageBucket: 'linkedin-clone-d8aeb.appspot.com',
  messagingSenderId: '320896130120',
  appId: '1:320896130120:web:0afb89b280131d56820c7d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAvEUWkyIJU_85eAM0I4ZOV8Cqg7ilysi8',
//   authDomain: 'linkedin-clone-d8aeb.firebaseapp.com',
//   projectId: 'linkedin-clone-d8aeb',
//   storageBucket: 'linkedin-clone-d8aeb.appspot.com',
//   messagingSenderId: '320896130120',
//   appId: '1:320896130120:web:0afb89b280131d56820c7d',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getAuth(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const ffirebaseConfig = {
//   apiKey: 'REACT_APP_FIREBASE_API_KEY',
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// };

// // Initialize Firebase
// export const aapp = initializeApp(firebaseConfig);
