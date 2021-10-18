import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init ";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Sign In with Google ---------

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // Log Out ----------------

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // Observe Whether user auth state chaged or not -----


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        });
    }, [])
    return {
        user, signInWithGoogle, logOut
    }


}
export default useFirebase;