import React from "react";
import {auth, provider} from "../../firebaseConfig.js";
import {signInWithPopup} from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies()

interface AuthProps {
    setIsAuthenticated: (value: unknown) => void
}

const Auth = (props: AuthProps) => {

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set('auth-token', result.user.refreshToken)
            props.setIsAuthenticated(true);
        } catch (error){
            alert(`Something went wrong! ${error}`)
        }
    };

    return <div>
        <h1>Sign in with Google please.</h1>
        <p>the developer was to lazy to walk you through the "regular" authentication...</p>
        <button onClick={signIn}>Sign in!</button>
    </div>;
};

export default Auth;
