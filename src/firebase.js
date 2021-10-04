import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKddboFt0pvGwWBBDioVopSTpK4BJ4IoQ",
  authDomain: "tinder-clone-project-rise.firebaseapp.com",
  projectId: "tinder-clone-project-rise",
  storageBucket: "tinder-clone-project-rise.appspot.com",
  messagingSenderId: "886467237839",
  appId: "1:886467237839:web:c751d8754834095bcf64ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database
