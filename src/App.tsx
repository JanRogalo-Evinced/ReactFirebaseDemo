import React, {useState} from "react";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import {signOut} from "firebase/auth";
import {auth} from "../firebaseConfig";

const cookies = new Cookies()
const App = () => {

    const logOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuthenticated(false)
    }

    const [isAuthenticated, setIsAuthenticated] = useState(cookies.get('auth-token'));
    return (
        <div>
            {isAuthenticated
                ? <div>
                    <p>Is authenticated </p>
                    <button onClick={logOut}> Log out</button>
                </div>
                : <Auth setIsAuthenticated={setIsAuthenticated}/>}
        </div>
    )
};

export default App;
