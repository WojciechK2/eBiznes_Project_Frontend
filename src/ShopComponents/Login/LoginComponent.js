import LoginLandingPage from "./LoginLandingPage";
import {useContext} from "react";
import {loggedInContext} from "../Contexts/loggedInContext";

const baseURL = process.env.REACT_APP_SERVER_URL

const LoginComponent = () => {

    const {loggedIn} = useContext(loggedInContext)

    let element
    if(!loggedIn){
        element = < a href={`${baseURL}login`}>Login with Google</a>
    } else {
        element = <LoginLandingPage />
    }

    return(
        <div className="LoginComponent">
            <h1>Login Component</h1>
            {element}
        </div>
    )
}

export default LoginComponent