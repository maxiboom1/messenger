import { NavLink } from "react-router-dom";
import GreetingPage from "../GreetingPage/GreetingPage";
import LoginRegister from "../LoginRegister/LoginRegister";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    return (
        <div className="AuthMenu">
            <div className="login-register">
                <LoginRegister />
            </div>

            <div className="greeting-page">
                <GreetingPage />
            </div>

        </div>
    );
}

export default AuthMenu;
