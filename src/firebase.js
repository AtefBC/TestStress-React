import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCr79QOHgv50H67P0g6jpRgaJyRMhmb2io",
    authDomain: "react-app-pfa.firebaseapp.com",
    projectId: "react-app-pfa",
    storageBucket: "react-app-pfa.appspot.com",
    messagingSenderId: "598111129805",
    appId: "1:598111129805:web:fd9a1e391ec32705355984",
    measurementId: "G-11YLNFK9HP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 


  