import LoginLandingPage from "./LoginLandingPage";
import {useContext, useEffect} from "react";
import {loggedInContext} from "../Contexts/loggedInContext";
import {fetchData} from "../../Utils/fetchData";
import {fetchDataWithCredentials} from "../../Utils/fetchDataWithCredentials";

const baseURL = process.env.REACT_APP_SERVER_URL

const LoginComponent = () => {

    const {loggedIn, setLoggedInValue} = useContext(loggedInContext)

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