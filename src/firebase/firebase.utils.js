import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';

const config = {
    apiKey: "AIzaSyD_AWeOHKhMFUN5xNRkqEmhpXa8r-PQPt0",
    authDomain: "crown-db-387c7.firebaseapp.com",
    databaseURL: "https://crown-db-387c7.firebaseio.com",
    projectId: "crown-db-387c7",
    storageBucket: "crown-db-387c7.appspot.com",
    messagingSenderId: "625575334289",
    appId: "1:625575334289:web:6cb39f36344890ad7cca30"
  };
 
  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
      if(!userAuth) return;
    console.log(firestore.doc('users/123kjsadksjd'))
  }


  // popup for google register
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  // popup for google register end
  
  export default firebase;