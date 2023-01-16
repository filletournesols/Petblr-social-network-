import {  setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from './firebase.js';
//Este será el archivo para el comportamiento de persistencia. lo que hace es que nos permite 
//"saber que pasa cierra sesión o qué pasa sí sólo cierra la pestaña"

setPersistence(firebaseAuth, inMemoryPersistence)
  .then(() => {
    const provider = new GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return signInWithRedirect(auth, provider);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log({errorCode})
    const errorMessage = error.message;
    console.log({errorMessage})
  });