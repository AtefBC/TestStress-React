import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJ3uQR57OXscxW1zCXHClhX15vspYwCRg",
  authDomain: "pfa-react-app.firebaseapp.com",
  projectId: "pfa-react-app",
  storageBucket: "pfa-react-app.appspot.com",
  messagingSenderId: "909845294811",
  appId: "1:909845294811:web:a89df9c144ae4457cee6fe",
  measurementId: "G-K5TTPGFY4H"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 


  