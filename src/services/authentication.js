import { getAuthProvider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { setLoggedIn, setProfileImage, setUser } from "../config/config-variables";

export function signInWithGoogle() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    let { provider, auth } = getAuthProvider();
    if (provider == null || auth == null) {
      alert('Log in service not disponible right now');
      return;
    }

    return signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful authentication
        const user = result.user;
        console.log(user);

        setUser(user)
        setProfileImage(user.photoURL);
        setLoggedIn(true);
        console.log('set Logged In: true')
        return user;
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        setLoggedIn(false);
        console.log('set Logged In: false')
      });
}