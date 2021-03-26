import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB2mbS1Wd_8ZG8mXHRLB1pbdhAujMvZIyM",
  authDomain: "booksanta-fd444.firebaseapp.com",
  projectId: "booksanta-fd444",
  storageBucket: "booksanta-fd444.appspot.com",
  messagingSenderId: "37713999680",
  appId: "1:37713999680:web:7b61a91e49df7013872ca5",
  measurementId: "G-5N7BC62BN2"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();