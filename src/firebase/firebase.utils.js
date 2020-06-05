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
      const userRef =firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      console.log(snapShot);

      if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log(error.message)
        }

      }
      return userRef
  }


  // popup for google register
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  // popup for google register end
  
  export default firebase;