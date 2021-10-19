
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../pages/Login/Firebase/Firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const singInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    /* work No: 02  Obsaber*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    /* Work No: 03 */
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        singInUsingGoogle,
        logOut,
        isLoading,
    }
}
export default useFirebase;