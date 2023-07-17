import { APP, PROVIDER } from "../config/firebase-config";
// import { setLoggedIn, setProfileImage, setUser } from "../config/config-variables";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export function signInWithGoogle() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    const auth = getAuth();
    if (PROVIDER == null || auth == null) {
      alert('Log in service not disponible right now');
      return;
    }

    return signInWithPopup(auth, PROVIDER)
      .then((result) => {
        // Handle successful authentication
        const user = result.user;
        console.log(user);
        
        return user;
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

// export function isUserLogged () {
//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

export function sign_out () {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('sign out')
    })
    .catch((error) => {
      console.log('error signin out\n', error)
    });
}