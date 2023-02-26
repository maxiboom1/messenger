import { NavLink } from "react-router-dom";
import Login from "./Login/Login";
import "./LoginRegister.css";

function LoginRegister(): JSX.Element {
    return (
        <div className="LoginRegister">
            <h1>Welcome back.</h1>
            <Login />
            <h3>Not a member yet?</h3>
            <NavLink to="/register">Join us</NavLink>
        </div>
    );
}

export default LoginRegister;
