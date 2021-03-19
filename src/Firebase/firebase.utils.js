import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_KEY

const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "crown-clothing-b5fbb.firebaseapp.com",
    projectId: "crown-clothing-b5fbb",
    storageBucket: "crown-clothing-b5fbb.appspot.com",
    messagingSenderId: "536656775265",
    appId: "1:536656775265:web:40bdc4d36c80f512d90220"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log(userAuth)

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase